import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import AppWrapper from "./App";
import "./App.css";

import About from "./components/About";
import Apply from "./components/Apply";
import Calender from "./components/Calender";
import Principal from "./components/Principal";
import Director from "./components/Director";

// Image imports
import academicImg from "./assets/academic.png";
import alumni1 from "./assets/alumni1.jpeg";
import alumni3 from "./assets/alumni3.jpg";
import athleticImg from "./assets/athletic.png";
import extraImg from "./assets/extra.png";
import heroImg from "./assets/hero.jpg";
import mountLogo from "./assets/mountlogo.png";
import ms0 from "./assets/ms0.jpg";
import ms1 from "./assets/ms1.jpg";
import ms2 from "./assets/ms2.jpg";
import ms3 from "./assets/ms3.jpg";
import ms4 from "./assets/ms4.jpg";
import ms5 from "./assets/ms5.jpg";
import ms6 from "./assets/ms6.jpg";
import ms7 from "./assets/ms7.jpg";
import ms8 from "./assets/ms8.jpg";
import studentImg from "./assets/student2.jpeg";
import review1 from "./assets/studentreview.jpg";
import review2 from "./assets/studentreview2.jpeg";
import review3 from "./assets/studentreview3.png";

// Custom hook for image caching
const useImageCache = () => {
  const cacheImage = useCallback(async (imageUrl, cacheKey) => {
    try {
      // Check if image is already cached
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        return cachedData;
      }

      // Fetch and cache the image
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();

      return new Promise((resolve) => {
        reader.onloadend = () => {
          const base64data = reader.result;
          localStorage.setItem(cacheKey, base64data);
          resolve(base64data);
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error caching image:", error);
      return imageUrl; // Fallback to original URL
    }
  }, []);

  const getCachedImage = useCallback((imageUrl, cacheKey) => {
    const cachedData = localStorage.getItem(cacheKey);
    return cachedData || imageUrl;
  }, []);

  return { cacheImage, getCachedImage };
};

// Constants
const PHOTO_CAROUSEL_INTERVAL = 3000;

// Memoized components
const SocialIcon = ({ d, label }) => (
  <a href="#" aria-label={label}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d={d} />
    </svg>
  </a>
);

const ContactItem = ({ icon, children }) => (
  <div className="contact-item">
    <div className="contact-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d={icon} />
      </svg>
    </div>
    {children}
  </div>
);

const FooterLink = ({ to, href, children }) => (
  <Link to={to} className="footer-link">
    <span className="link-bullet"></span>
    {children}
  </Link>
);

function Navigation({ isMenuOpen, toggleMenu, isScrolled }) {
  const location = useLocation();

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className={`header-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        <div className="logo">
          <Link
            to="/"
            onClick={handleLinkClick}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 2vw, 12px)",
            }}
          >
            <img
              src={mountLogo}
              alt="Mount Summer Convent School Logo"
              loading="lazy"
            />
            <span className="logo-text">Mount Summer Convent School</span>
          </Link>
        </div>
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
          onClick={handleLinkClick}
        >
          About Us
        </Link>
        <Link
          to="/apply"
          className={location.pathname === "/apply" ? "active" : ""}
          onClick={handleLinkClick}
        >
          Admissions
        </Link>
        <Link
          to="/calendar"
          className={location.pathname === "/calendar" ? "active" : ""}
          onClick={handleLinkClick}
        >
          Academics
        </Link>

        {/* Mobile Apply Now Button */}
        <Link
          to="/apply"
          className="apply-now-mobile"
          onClick={handleLinkClick}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          APPLY NOW
        </Link>
      </div>
      <div className="nav-right">
        <div className="action-buttons">
          <Link to="/apply" className="apply-now">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            APPLY NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPhotoSlide, setCurrentPhotoSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cachedHeroImage, setCachedHeroImage] = useState(heroImg);
  const [cachedCarouselImages, setCachedCarouselImages] = useState([]);
  const carouselRef = useRef(null);

  // Initialize image caching
  const { cacheImage, getCachedImage } = useImageCache();

  // Memoized data
  const photos = useMemo(
    () => [
      { src: ms2, cacheKey: "carousel_ms2" },
      { src: ms1, cacheKey: "carousel_ms1" },
      { src: ms0, cacheKey: "carousel_ms0" },
      { src: ms3, cacheKey: "carousel_ms3" },
      { src: ms4, cacheKey: "carousel_ms4" },
      { src: ms5, cacheKey: "carousel_ms5" },
      { src: ms6, cacheKey: "carousel_ms6" },
      { src: ms7, cacheKey: "carousel_ms7" },
      { src: ms8, cacheKey: "carousel_ms8" },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        img: review2,
        name: "James Lee",
        year: "Class of '22",
        quote:
          "Mount Summer Convent School provided me with a nurturing environment where I could grow both academically and spiritually.",
      },
      {
        img: review3,
        name: "Sophia Martinez",
        year: "Class of '24",
        quote:
          "The extracurricular activities at Mount Summer helped me discover my passion for leadership and teamwork.",
      },
      {
        img: review1,
        name: "Gabriella Irwin",
        year: "Class of '23",
        quote:
          "At Mount Summer I can find support from my teachers, counselors or anyone in administration...",
      },
    ],
    []
  );

  const socialIcons = useMemo(
    () => [
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/1EsmznRSTj/",
        d: "M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.919c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z",
      },
      {
        label: "Email",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=mountsummerconvent2012@gmail.com",
        d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/mountsummerconventschool?igsh=M2l5cTNjbWlpeHN4",
        d: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.5.2.8.5 1.1 1.1.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.5-.5.8-1.1 1.1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.5-.2-.8-.5-1.1-1.1-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.5.5-.8 1.1-1.1.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.6.1 4.5.3 3.7.6 2.9.9 2.2 1.4 1.6 2 .9 2.6.4 3.3.1 4.1-.2 5-.1 6.1 0 7.5.1 8.8.1 9.3.1 12c0 2.7 0 3.2.1 4.5.1 1.4.3 2.5.6 3.3.3.8.9 1.5 1.5 2.1.6.6 1.3 1.1 2.1 1.4.8.3 1.9.5 3.3.6C8.3 24 8.7 24 12 24s3.6 0 4.9-.1c1.4-.1 2.5-.3 3.3-.6.8-.3 1.5-.9 2.1-1.5.6-.6 1.1-1.3 1.4-2.1.3-.8.5-1.9.6-3.3.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.4-.3-2.5-.6-3.3-.3-.8-.9-1.5-1.5-2.1C21.5.9 20.8.4 20 .1 19.1-.2 18-.1 16.5 0 15.2.1 14.7.1 12 .1zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.6c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4z",
      },
    ],
    []
  );

  const contactIcons = useMemo(
    () => ({
      location:
        "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
      phone:
        "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
      email:
        "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    }),
    []
  );

  // Memoized callbacks
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const toggleDropdown = useCallback(
    () => setIsDropdownOpen((prev) => !prev),
    []
  );

  const nextPhotoSlide = useCallback(() => {
    setCurrentPhotoSlide((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevPhotoSlide = useCallback(() => {
    setCurrentPhotoSlide((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  const handlePhotoSlideClick = useCallback((idx) => {
    setCurrentPhotoSlide(idx);
  }, []);

  const handleTestimonialDotClick = useCallback((idx) => {
    setCurrentSlide(idx);
  }, []);

  const handleCarouselMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleCarouselMouseLeave = useCallback(() => setIsPaused(false), []);

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside handler to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if menu is open and click is outside the navigation
      if (isMenuOpen && !e.target.closest(".header-nav")) {
        setIsMenuOpen(false);
      }
    };

    // Only add listener if menu is open
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isMenuOpen]);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Photo carousel auto-play
  useEffect(() => {
    // Reset to first slide when component mounts
    setCurrentPhotoSlide(0);

    if (!isPaused) {
      const interval = setInterval(nextPhotoSlide, PHOTO_CAROUSEL_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextPhotoSlide]);

  // Image caching effect
  useEffect(() => {
    const cacheImages = async () => {
      try {
        // Cache hero image
        const heroCacheKey = "hero_image";
        const cachedHero = getCachedImage(heroImg, heroCacheKey);
        if (cachedHero === heroImg) {
          // Image not cached yet, cache it
          const cachedHeroData = await cacheImage(heroImg, heroCacheKey);
          setCachedHeroImage(cachedHeroData);
        } else {
          setCachedHeroImage(cachedHero);
        }

        // Cache carousel images
        const carouselImagePromises = photos.map(async (photo) => {
          const cachedImage = getCachedImage(photo.src, photo.cacheKey);
          if (cachedImage === photo.src) {
            // Image not cached yet, cache it
            return await cacheImage(photo.src, photo.cacheKey);
          }
          return cachedImage;
        });

        const cachedImages = await Promise.all(carouselImagePromises);
        setCachedCarouselImages(cachedImages);
      } catch (error) {
        console.error("Error caching images:", error);
      }
    };

    cacheImages();
  }, [cacheImage, getCachedImage, photos]);

  // Hero section background style
  const heroBackgroundStyle = useMemo(
    () => ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${cachedHeroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(2px) brightness(0.6)",
      zIndex: 0,
    }),
    [cachedHeroImage]
  );

  const heroContentStyle = useMemo(
    () => ({
      position: "relative",
      zIndex: 1,
    }),
    []
  );

  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <Navigation
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isScrolled={isScrolled}
        />

        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <main role="main">
                {/* Hero Section */}
                <section
                  className="hero"
                  style={{
                    backgroundImage: `url(${cachedHeroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div style={heroBackgroundStyle} />
                  <div style={heroContentStyle}>
                    <h1 className="hero-title">
                      Discover Excellence at Mount Summer
                    </h1>
                    <p className="hero-subtitle">
                      Where every student's journey begins with purpose
                    </p>
                  </div>
                </section>

                {/* Quick Links */}
                <section className="quick-links">
                  <div className="venture-text">Where will you venture?</div>
                  <div>
                    <img src={academicImg} alt="Academics" />
                    <p>ACADEMICS</p>
                  </div>
                  <div>
                    <img src={athleticImg} alt="Athletics" />
                    <p>ATHLETICS</p>
                  </div>
                  <div>
                    <img src={extraImg} alt="Extracurricular" />
                    <p>EXTRACURRICULAR</p>
                  </div>
                </section>

                {/* Photo Carousel */}
                <section
                  className="photo-carousel"
                  aria-label="School and Student Photo Gallery"
                  ref={carouselRef}
                  onMouseEnter={handleCarouselMouseEnter}
                  onMouseLeave={handleCarouselMouseLeave}
                >
                  <div
                    className="carousel"
                    style={{
                      transform: `translateX(-${currentPhotoSlide * 100}%)`,
                    }}
                  >
                    {photos.map((photo, idx) => (
                      <div key={idx} className="carousel-item">
                        <img
                          src={cachedCarouselImages[idx] || photo.src}
                          alt="Campus"
                          className="carousel-image"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="carousel-controls">
                    <button onClick={prevPhotoSlide}>‹</button>
                    <button onClick={nextPhotoSlide}>›</button>
                  </div>
                  <div className="carousel-dots">
                    {photos.map((_, idx) => (
                      <span
                        key={idx}
                        className={`dot ${
                          idx === currentPhotoSlide ? "active" : ""
                        }`}
                        onClick={() => handlePhotoSlideClick(idx)}
                      />
                    ))}
                  </div>
                </section>

                {/* Welcome Section */}
                <section className="welcome">
                  <img src={studentImg} alt="Students" loading="lazy" />
                  <div className="welcome-text">
                    <h2>WELCOME TO</h2>
                    <h1>Mount Summer Convent School</h1>
                    <p>
                      We are thrilled to welcome you to Mount Summer Convent
                      School...
                    </p>
                    <Link to="/about" className="cta-button">
                      About Us
                    </Link>
                    <Link to="/apply" className="cta-button">
                      Apply
                    </Link>
                  </div>
                </section>

                {/* Student Perspectives */}
                <section className="perspectives">
                  <h1>School's Perspectives</h1>
                  <div className="perspectives-grid">
                    <div>
                      <img src={alumni3} alt="Principal" />
                      <a href="/director">ASK Principal</a>
                    </div>
                    <div>
                      <img src={alumni1} alt="Vice Principal" />
                      <a href="/principal">ASK Vice Principal</a>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section className="testimonial">
                  <div
                    className="carousel"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {testimonials.map((item, idx) => (
                      <div key={idx} className="carousel-item">
                        <div className="testimonial-content">
                          <span className="quote">"</span>
                          <img src={item.img} alt={item.name} />
                          <div className="text-content">
                            <p>{item.quote}</p>
                            <p className="author">
                              — {item.name}, {item.year}
                            </p>
                            <span className="quote">"</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="carousel-controls">
                    <button onClick={prevSlide}>‹</button>
                    <div className="carousel-dots">
                      {testimonials.map((_, idx) => (
                        <span
                          key={idx}
                          className={`dot ${
                            idx === currentSlide ? "active" : ""
                          }`}
                          onClick={() => handleTestimonialDotClick(idx)}
                        />
                      ))}
                    </div>
                    <button onClick={nextSlide}>›</button>
                  </div>
                </section>

                {/* Mission */}
                <section className="mission" id="mission">
                  <h1>— Our Mission —</h1>

                  {/* Desktop Mission Card */}
                  <div className="mission-card desktop-mission">
                    <ul className="mission-points">
                      <li>
                        <strong>Academic Excellence:</strong> We are dedicated
                        to fostering academic excellence through rigorous
                        curriculum and innovative teaching methods.
                      </li>
                      <li>
                        <strong>Compassionate Leadership:</strong> We develop
                        compassionate leaders who serve their communities with
                        integrity and empathy.
                      </li>
                      <li>
                        <strong>Critical Thinking:</strong> We empower students
                        to become critical thinkers and ethical decision-makers
                        in a complex world.
                      </li>
                      <li>
                        <strong>Global Citizenship:</strong> We prepare students
                        to be global citizens who contribute positively to
                        society.
                      </li>
                      <li>
                        <strong>Holistic Development:</strong> Through vibrant
                        extracurricular programs, we nurture each student's
                        unique talents and abilities.
                      </li>
                      <li>
                        <strong>Supportive Community:</strong> We create a
                        supportive community that prepares students for a life
                        of purpose and service.
                      </li>
                    </ul>
                  </div>

                  {/* Mobile Mission Cards */}
                  <div className="mobile-mission-cards">
                    <div className="mobile-mission-card">
                      <div className="mission-icon">📚</div>
                      <h3>Excellence</h3>
                      <p>
                        Rigorous curriculum and innovative teaching for academic
                        success.
                      </p>
                    </div>

                    <div className="mobile-mission-card">
                      <div className="mission-icon">🌟</div>
                      <h3>Leadership</h3>
                      <p>
                        Developing compassionate leaders who serve with
                        integrity.
                      </p>
                    </div>

                    <div className="mobile-mission-card">
                      <div className="mission-icon">🌍</div>
                      <h3>Global Citizens</h3>
                      <p>
                        Preparing students to contribute positively to society.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Calendar */}
                <section className="calendar">
                  <h1>CALENDAR</h1>

                  {/* Desktop Calendar Grid */}
                  <div className="calendar-grid desktop-calendar">
                    <div className="category">
                      <h3>Academics</h3>
                      <ul>
                        <li>
                          Ambedkar Jayanti <span>Apr 14, 2025</span>
                        </li>
                        <li>
                          Mount Summer Foundation Day <span>June 17, 2025</span>
                        </li>
                        <li>
                          Teacher's Day <span>Sept 5, 2025</span>
                        </li>
                      </ul>
                    </div>
                    <div className="category">
                      <h3>Athletics</h3>
                      <ul>
                        <li>
                          Gandhi Jayanti <span>Oct 2, 2025</span>
                        </li>
                        <li>
                          Children's Day <span>Nov 14, 2025</span>
                        </li>
                        <li>
                          Dr.Rajendra Prasad Jayanti <span>Dec 3, 2025</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="/calendar" className="view-full desktop-view-full">
                    VIEW FULL CALENDAR
                  </Link>

                  {/* Mobile Calendar Cards */}
                  <div className="mobile-calendar-cards">
                    <div className="mobile-calendar-card">
                      <div className="calendar-icon">📚</div>
                      <h3>Ambedkar Jayanti</h3>
                      <p className="event-date">Apr 14, 2025</p>
                      <span className="event-category">Academics</span>
                    </div>

                    <div className="mobile-calendar-card">
                      <div className="calendar-icon">🎓</div>
                      <h3>Foundation Day</h3>
                      <p className="event-date">June 17, 2025</p>
                      <span className="event-category">Academics</span>
                    </div>

                    <div className="mobile-calendar-card">
                      <div className="calendar-icon">👨‍🏫</div>
                      <h3>Teacher's Day</h3>
                      <p className="event-date">Sept 5, 2025</p>
                      <span className="event-category">Academics</span>
                    </div>

                    <div className="mobile-calendar-card">
                      <div className="calendar-icon">🏃‍♂️</div>
                      <h3>Gandhi Jayanti</h3>
                      <p className="event-date">Oct 2, 2025</p>
                      <span className="event-category">Athletics</span>
                    </div>

                    <div className="mobile-calendar-card">
                      <div className="calendar-icon">🎈</div>
                      <h3>Children's Day</h3>
                      <p className="event-date">Nov 14, 2025</p>
                      <span className="event-category">Athletics</span>
                    </div>

                    <div className="mobile-calendar-card">
                      <div className="calendar-icon">🎯</div>
                      <h3>Dr. Rajendra Prasad Jayanti</h3>
                      <p className="event-date">Dec 3, 2025</p>
                      <span className="event-category">Athletics</span>
                    </div>
                  </div>

                  <Link to="/calendar" className="view-full mobile-view-full">
                    VIEW FULL CALENDAR
                  </Link>
                </section>

                {/* Get Involved */}
                <section className="get-involved" id="get-involved">
                  <h1>SUPPORT OUR MISSION</h1>
                  <p>
                    There are many ways you can support Mount Summer Convent
                    School and be part of our vibrant community.
                  </p>
                  <div className="involvement-options">
                    <div className="involvement-item">
                      <i className="fas fa-hands-helping"></i>
                      <h3>Volunteer</h3>
                      <p>
                        Help out at school events, mentor students, or assist in
                        the classroom.
                      </p>
                      <a href="#" className="cta-button">
                        Learn More
                      </a>
                    </div>
                    <div className="involvement-item">
                      <i className="fas fa-calendar-alt"></i>
                      <h3>Attend Events</h3>
                      <p>
                        Join us for open houses, fundraisers, and community
                        gatherings.
                      </p>
                      <Link to="/calendar" className="cta-button">
                        See Calendar
                      </Link>
                    </div>
                    <div className="involvement-item">
                      <i className="fas fa-donate"></i>
                      <h3>Donate</h3>
                      <p>
                        Your financial support helps us provide the best
                        education and opportunities for our students.
                      </p>
                      <a href="#" className="cta-button">
                        Donate Now
                      </a>
                    </div>
                  </div>
                  <div className="involvement-testimonial">
                    <p>
                      "Volunteering at Mount Summer has been incredibly
                      rewarding. I've made lasting connections and seen
                      firsthand the impact of our community's support."
                    </p>
                    <p className="author">— John Doe, Parent Volunteer</p>
                  </div>
                </section>
              </main>
            }
          />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/calendar" element={<Calender />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/director" element={<Director />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-logo-section">
            <div className="footer-logo-wrapper">
              <img src={mountLogo} alt="Logo" className="footer-logo" />
              <div className="footer-logo-glow"></div>
            </div>
            <p className="footer-description">
              Mount Summer Convent School is a Christ-centered community
              dedicated to nurturing academic excellence and spiritual growth.
            </p>
            <div className="footer-social-links">
              {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={icon.label}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={icon.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <h3 className="footer-section-title">Contact Us</h3>
            <ContactItem icon={contactIcons.location}>
              <p>
                Mount Summer Convent School
                <br /> Polo field road, K.M tank <br /> Laheria Sarai,
                Darbhanga - 846001
              </p>
            </ContactItem>
            <ContactItem icon={contactIcons.phone}>
              <a href="tel:+91 9334391034" className="contact-link">
                (+91) 9334391034
              </a>
            </ContactItem>
            <ContactItem icon={contactIcons.email}>
              <a
                href="mailto:mountsummerconvent2012@gmail.com"
                className="contact-link"
              >
                mountsummerconvent2012@gmail.com
              </a>
            </ContactItem>
          </div>

          <div className="footer-links">
            <h3 className="footer-section-title">Quick Links</h3>
            <div className="links-grid">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/apply">Admissions</FooterLink>
              <FooterLink to="/calendar">Academics</FooterLink>
              <FooterLink to="#">Home</FooterLink>
              <a
                href="#mission"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("mission");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
                className="footer-link"
              >
                <span className="link-bullet"></span>
                Faith
              </a>
            </div>
          </div>
        </footer>

        <div className="footer-bottom">
          <p>
            © Copyright 2025 Mount Summer Convent School. All Rights Reserved.
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;
