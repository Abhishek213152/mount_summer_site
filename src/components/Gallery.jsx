import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ALL_GALLERY_PHOTOS, GALLERY_CATEGORIES } from "../data/galleryData";
import mountLogo from "../assets/mountlogo.png";
import "./Gallery.css";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const thumbnailsRef = useRef(null);

  // Filter photos based on category and search query
  const filteredPhotos = useMemo(() => {
    return ALL_GALLERY_PHOTOS.filter((photo) => {
      const matchesCategory =
        selectedCategory === "all" || photo.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Counts for each category
  const categoryCounts = useMemo(() => {
    const counts = { all: ALL_GALLERY_PHOTOS.length };
    ALL_GALLERY_PHOTOS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Modal navigation
  const handleOpenModal = useCallback((index) => {
    setActivePhotoIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseModal = useCallback(() => {
    setActivePhotoIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const handleNextPhoto = useCallback(() => {
    if (activePhotoIndex !== null && filteredPhotos.length > 0) {
      setActivePhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  const handlePrevPhoto = useCallback(() => {
    if (activePhotoIndex !== null && filteredPhotos.length > 0) {
      setActivePhotoIndex(
        (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (activePhotoIndex !== null && thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[activePhotoIndex];
      if (activeThumb && typeof activeThumb.scrollIntoView === "function") {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activePhotoIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowRight") handleNextPhoto();
      if (e.key === "ArrowLeft") handlePrevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, handleCloseModal, handleNextPhoto, handlePrevPhoto]);

  // Enhanced touch swipe support for mobile
  const handleTouchStart = (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      setTouchStartX(e.changedTouches[0].clientX);
      setTouchStartY(e.changedTouches[0].clientY);
    }
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // Only swipe if horizontal movement exceeds 40px and dominates vertical movement
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNextPhoto();
      } else {
        handlePrevPhoto();
      }
    }
  };

  const currentPhoto =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <div className="gallery-page">
      {/* Header Banner */}
      <section className="gallery-hero">
        <div className="gallery-hero-badge">
          <img src={mountLogo} alt="Mount Summer Logo" className="hero-badge-logo" />
          <span>Mount Summer Convent School</span>
        </div>
        <h1 className="gallery-hero-title">Photo Gallery & Campus Life</h1>
        <p className="gallery-hero-subtitle">
          Capturing joyous celebrations, academic milestones, vibrant stage
          enactments, and memorable moments from our school family in Darbhanga.
        </p>

        <div className="gallery-stats-bar">
          <div className="stat-pill">
            <strong>30+</strong> New Activity Moments
          </div>
          <div className="stat-pill">
            <strong>100%</strong> Authentic Memories
          </div>
          <div className="stat-pill">
            <strong>All Classes</strong> Primary & Middle Wing
          </div>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <div className="gallery-controls-container">
        <div className="gallery-search-box">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            inputMode="search"
            autoComplete="off"
            placeholder="Search by event, award, student, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search photos"
          />
          {searchQuery && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="gallery-tabs">
          {GALLERY_CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                className={`gallery-tab-btn ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="tab-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      <main className="gallery-grid-section">
        {filteredPhotos.length === 0 ? (
          <div className="gallery-empty-state">
            <div className="empty-icon">📷</div>
            <h3>No photos found matching your criteria</h3>
            <p>Try resetting the category filter or clearing your search term.</p>
            <button
              className="reset-filters-btn"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="gallery-grid">
            {filteredPhotos.map((photo, index) => (
              <article
                key={photo.id}
                className="gallery-card"
                onClick={() => handleOpenModal(index)}
              >
                <div className="gallery-image-wrapper">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="gallery-thumb-image"
                    loading="lazy"
                  />
                  <div className="gallery-card-badge">{photo.tag}</div>
                  <div className="gallery-card-overlay">
                    <span className="view-full-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M9 21H3v-6" />
                        <path d="M21 3l-7 7" />
                        <path d="M3 21l7-7" />
                      </svg>
                    </span>
                    <span className="overlay-text">Click to view</span>
                  </div>
                </div>

                <div className="gallery-card-info">
                  <h3 className="gallery-card-title">{photo.title}</h3>
                  <p className="gallery-card-desc">{photo.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div
          className="lightbox-overlay"
          onClick={handleCloseModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={currentPhoto.title}
          >
            {/* Top Toolbar */}
            <div className="lightbox-header">
              <div className="lightbox-title-wrap">
                <span className="lightbox-badge">{currentPhoto.tag}</span>
                <h2 className="lightbox-title">{currentPhoto.title}</h2>
              </div>
              <div className="lightbox-actions">
                <span className="lightbox-counter">
                  {activePhotoIndex + 1} / {filteredPhotos.length}
                </span>
                <button
                  className="lightbox-close-btn"
                  onClick={handleCloseModal}
                  aria-label="Close image viewer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Main Image Stage */}
            <div
              className="lightbox-stage"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                className="lightbox-nav-btn prev"
                onClick={handlePrevPhoto}
                aria-label="Previous photo"
              >
                ‹
              </button>

              <div className="lightbox-image-container">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  className="lightbox-image"
                />
              </div>

              <button
                className="lightbox-nav-btn next"
                onClick={handleNextPhoto}
                aria-label="Next photo"
              >
                ›
              </button>

              <div className="lightbox-mobile-hint">
                <span>⇄ Swipe to change</span>
              </div>
            </div>

            {/* Description Bar */}
            <div className="lightbox-footer">
              <p className="lightbox-desc">{currentPhoto.description}</p>
            </div>

            {/* Mini Thumbnail Strip */}
            <div className="lightbox-thumbnails" ref={thumbnailsRef}>
              {filteredPhotos.map((photo, idx) => (
                <button
                  key={photo.id}
                  className={`thumb-btn ${
                    idx === activePhotoIndex ? "active" : ""
                  }`}
                  onClick={() => setActivePhotoIndex(idx)}
                  aria-label={`Jump to photo ${idx + 1}`}
                >
                  <img src={photo.src} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <section className="gallery-cta-banner">
        <h2>Experience the Mount Summer Spirit</h2>
        <p>
          Admissions are open for Kindergarten through Class 8. Join our family
          and help your child flourish!
        </p>
        <div className="cta-links">
          <Link to="/apply" className="primary-cta-btn">
            Apply for Admission
          </Link>
          <Link to="/" className="secondary-cta-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
