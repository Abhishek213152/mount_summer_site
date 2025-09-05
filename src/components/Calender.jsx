import React, { useState, useEffect } from "react";

const Calendar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const styles = {
    globalReset: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: calc(200px + 100%) 0; }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-slide {
        animation: slideInRight 0.8s ease-out forwards;
      }

      /* Mobile responsive styles */
      @media (max-width: 768px) {
        .mobile-hidden {
          display: none !important;
        }
        
        .mobile-visible {
          display: block !important;
        }
      }

      @media (min-width: 769px) {
        .mobile-visible {
          display: none !important;
        }
      }
    `,

    container: {
      minHeight: "100vh",
      background: "#ffffff",
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "calc(2rem + 110px) 0 2rem 0",
      position: "relative",
      overflow: "hidden",
    },

    floatingElements: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 1,
    },

    floatingCircle: {
      position: "absolute",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.1)",
      animation: "float 6s ease-in-out infinite",
    },

    innerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 2rem",
      position: "relative",
      zIndex: 2,
    },

    mainTitle: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontWeight: "800",
      textAlign: "center",
      marginBottom: "3rem",
      color: "#1f2937",
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      letterSpacing: "-1px",
      position: "relative",
    },

    titleUnderline: {
      width: "150px",
      height: "6px",
      background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
      margin: "1rem auto",
      borderRadius: "3px",
      animation: "shimmer 2s infinite",
    },

    section: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      borderRadius: "2rem",
      padding: "2.5rem",
      marginBottom: "3rem",
      boxShadow:
        "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      transform: "translateY(0)",
      opacity: 1,
    },

    sectionMobile: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      borderRadius: "1.5rem",
      padding: "1.5rem",
      marginBottom: "2rem",
      boxShadow:
        "0 15px 30px -10px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      transform: "translateY(0)",
      opacity: 1,
    },

    sectionHover: {
      transform: "translateY(-8px)",
      boxShadow:
        "0 35px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)",
    },

    sectionTopBorder: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b)",
      backgroundSize: "400% 100%",
      animation: "gradientMove 3s ease infinite",
    },

    sectionTitle: {
      fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
      fontWeight: "700",
      color: "#1f2937",
      marginBottom: "2rem",
      textAlign: "center",
      position: "relative",
      paddingBottom: "1rem",
    },

    sectionTitleAfter: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "3px",
      background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
      borderRadius: "2px",
    },

    // Desktop table styles
    table: {
      width: "100%",
      borderCollapse: "collapse",
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      background: "white",
    },

    tableHeader: {
      background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
      color: "white",
    },

    th: {
      padding: "1.5rem 1rem",
      textAlign: "left",
      fontWeight: "600",
      fontSize: "1rem",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      position: "relative",
    },

    td: {
      padding: "1.25rem 1rem",
      borderBottom: "1px solid #e5e7eb",
      fontSize: "1rem",
      color: "#374151",
      transition: "all 0.3s ease",
      position: "relative",
    },

    tableRow: {
      transition: "all 0.3s ease",
      cursor: "pointer",
    },

    tableRowHover: {
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      transform: "scale(1.01)",
      boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)",
    },

    // Mobile card styles
    mobileCardsContainer: {
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "1fr",
    },

    mobileCard: {
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      borderRadius: "1rem",
      padding: "1.25rem",
      border: "1px solid #e2e8f0",
      transition: "all 0.3s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      boxShadow:
        "0 8px 25px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
    },

    mobileCardHover: {
      transform: "translateY(-5px)",
      boxShadow:
        "0 15px 35px rgba(0, 0, 0, 0.18), 0 8px 15px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      background: "linear-gradient(135deg, #f1f5f9 0%, #dbeafe 100%)",
    },

    mobileCardHeader: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1rem",
    },

    mobileCardNumber: {
      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      color: "white",
      borderRadius: "50%",
      width: "2rem",
      height: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.875rem",
      fontWeight: "600",
      flexShrink: 0,
    },

    mobileCardTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      color: "#1f2937",
      flex: 1,
    },

    mobileCardContent: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },

    mobileCardRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.5rem 0",
      borderBottom: "1px solid #e5e7eb",
    },

    mobileCardRowLast: {
      borderBottom: "none",
    },

    mobileCardLabel: {
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "#6b7280",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },

    mobileCardValue: {
      fontSize: "0.875rem",
      fontWeight: "600",
      color: "#374151",
      textAlign: "right",
      maxWidth: "60%",
    },

    mobileCardDate: {
      fontSize: "0.65rem",
      fontWeight: "600",
      color: "#92400e",
      background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
      padding: "0.15rem 0.5rem",
      borderRadius: "0.5rem",
      border: "1px solid #fbbf24",
      textAlign: "center",
      lineHeight: "1.2",
    },

    serialNumber: {
      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      color: "white",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.875rem",
      fontWeight: "600",
      margin: "0 auto",
    },

    importantDate: {
      background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
      padding: "0.5rem 1rem",
      borderRadius: "2rem",
      fontSize: "0.875rem",
      fontWeight: "600",
      color: "#92400e",
      display: "inline-block",
      border: "1px solid #fbbf24",
    },

    notes: {
      background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      border: "1px solid #93c5fd",
      borderRadius: "1rem",
      padding: "1.5rem",
      marginTop: "2rem",
      position: "relative",
      overflow: "hidden",
    },

    notesMobile: {
      background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      border: "1px solid #93c5fd",
      borderRadius: "0.75rem",
      padding: "1rem",
      marginTop: "1.5rem",
      position: "relative",
      overflow: "hidden",
    },

    notesIcon: {
      position: "absolute",
      top: "-10px",
      right: "-10px",
      width: "40px",
      height: "40px",
      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "1.2rem",
      animation: "pulse 2s infinite",
    },

    notesParagraph: {
      color: "#1e40af",
      fontSize: "0.95rem",
      marginBottom: "0.5rem",
      fontWeight: "500",
      lineHeight: "1.6",
    },

    notesParagraphMobile: {
      color: "#1e40af",
      fontSize: "0.875rem",
      marginBottom: "0.5rem",
      fontWeight: "500",
      lineHeight: "1.5",
    },

    sessionYear: {
      background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
      color: "white",
      padding: "2rem",
      borderRadius: "2rem",
      textAlign: "center",
      fontSize: "1.75rem",
      fontWeight: "700",
      marginTop: "3rem",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
    },

    sessionYearMobile: {
      background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
      color: "white",
      padding: "1.5rem",
      borderRadius: "1.5rem",
      textAlign: "center",
      fontSize: "1.25rem",
      fontWeight: "700",
      marginTop: "2rem",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)",
    },

    sessionYearBg: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0 0 8-8 8-8s8 8 8 8-8 8-8 8-8-8-8-8z"/%3E%3C/g%3E%3C/svg%3E")',
      opacity: 0.1,
    },

    categoryBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 1rem",
      borderRadius: "2rem",
      fontSize: "0.875rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },

    categoryBadgeMobile: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.4rem 0.8rem",
      borderRadius: "1.5rem",
      fontSize: "0.7rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.3px",
    },

    vacationBadge: {
      background: "linear-gradient(135deg, #fecaca 0%, #fca5a5 100%)",
      color: "#991b1b",
      border: "1px solid #f87171",
    },

    examBadge: {
      background: "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
      color: "#9a3412",
      border: "1px solid #fb923c",
    },

    celebrationBadge: {
      background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
      color: "#065f46",
      border: "1px solid #34d399",
    },

    holidayBadge: {
      background: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
      color: "#3730a3",
      border: "1px solid #818cf8",
    },
  };

  const vacationData = [
    [
      "01",
      "Summer Vacation",
      "04-06-2025 to 25-06-2025",
      "Wednesday to Wednesday",
      "22",
    ],
    [
      "02",
      "Durga Puja",
      "27-09-2025 to 03-10-2025",
      "Saturday to Friday",
      "07",
    ],
    [
      "03",
      "Dipawali & Chhath",
      "20-10-2025 to 30-10-2025",
      "Monday to Thursday",
      "10",
    ],
  ];

  const examData = [
    ["01", "P.A. - I", "20-05-2025 to 24-05-2025"],
    ["02", "P.A. - II", "07-08-2025 to 13-08-2025"],
    ["03", "Half Yearly Examination", "20-09-2025 to 26-09-2025"],
    ["04", "P.A. - III", "25-11-2025 to 29-11-2025"],
    ["05", "P.A. - IV", "20-01-2026 to 24-01-2026"],
    ["06", "Final Examination", "10-03-2026 to 20-03-2026"],
  ];

  const celebrationData = [
    ["01", "Ambedkar Jayanti", "14th April 2025"],
    ["02", "Mount Summer Foundation Day", "17th June 2025"],
    ["03", "Independence Day", "15th August 2025"],
    ["04", "Teacher's Day", "5th September 2025"],
    ["05", "Gandhi Jayanti", "2nd October 2025"],
    ["06", "Children's Day", "14th November 2025"],
    ["07", "Dr. Rajendra Prasad Jayanti", "3rd December 2025"],
    ["08", "Republic Day", "26th January 2026"],
  ];

  const holidayData = [
    ["01", "Ram Navami", "06-04-2025", "Sunday", "01"],
    ["02", "Eid-Ul-Azha", "07-06-2025", "Saturday", "01"],
    ["03", "Muharram", "06-07-2025", "Sunday", "01"],
    ["04", "Raksha Bandhan", "09-08-2025", "Saturday", "01"],
    ["05", "Janmashtami", "16-08-2025", "Saturday", "01"],
    ["06", "Ganesh Chaturthi", "28-08-2025", "Thursday", "01"],
    ["07", "Vishwakarma Puja", "17-09-2025", "Wednesday", "01"],
    ["08", "Christmas", "25-12-2025", "Thursday", "01"],
    ["09", "New Year", "31-12-2025 to 01-01-2026", "Wed–Thu", "02"],
    ["10", "Makar Sankranti", "14-01-2026", "Wednesday", "01"],
    ["11", "Vasant Panchami", "21-01-2026", "Wednesday", "01"],
    ["12", "Maha Shivratri", "15-02-2026", "Sunday", "01"],
    ["13", "Holi", "04-03-2026 to 06-03-2026", "Wed–Fri", "03"],
    ["14", "Id-ul-Fiter", "21-03-2026", "Saturday", "01"],
  ];

  const handleSectionHover = (sectionId, isHovering) => {
    setActiveSection(isHovering ? sectionId : null);
  };

  const renderMobileCard = (row, headers, sectionId, rowIndex) => {
    const [serial, title, date, day, days] = row;

    return (
      <div
        key={rowIndex}
        style={styles.mobileCard}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = styles.mobileCardHover.background;
          e.currentTarget.style.transform = styles.mobileCardHover.transform;
          e.currentTarget.style.boxShadow = styles.mobileCardHover.boxShadow;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = styles.mobileCard.background;
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div style={styles.mobileCardHeader}>
          <div style={styles.mobileCardNumber}>{serial}</div>
          <div style={styles.mobileCardTitle}>{title}</div>
        </div>
        <div style={styles.mobileCardContent}>
          {date && (
            <div style={styles.mobileCardRow}>
              <span style={styles.mobileCardLabel}>Date</span>
              <span style={styles.mobileCardDate}>{date}</span>
            </div>
          )}
          {day && (
            <div style={styles.mobileCardRow}>
              <span style={styles.mobileCardLabel}>Day</span>
              <span style={styles.mobileCardValue}>{day}</span>
            </div>
          )}
          {days && (
            <div style={styles.mobileCardRow}>
              <span style={styles.mobileCardLabel}>Duration</span>
              <span style={styles.mobileCardValue}>{days} days</span>
            </div>
          )}
          {!day && !days && date && (
            <div style={styles.mobileCardRow}>
              <span style={styles.mobileCardLabel}>Date</span>
              <span style={styles.mobileCardValue}>{date}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderTable = (data, headers, badgeStyle, sectionId) => (
    <div
      style={{
        ...(isMobile ? styles.sectionMobile : styles.section),
        ...(activeSection === sectionId ? styles.sectionHover : {}),
        transform: isVisible[sectionId] ? "translateY(0)" : "translateY(50px)",
        opacity: isVisible[sectionId] ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={() => handleSectionHover(sectionId, true)}
      onMouseLeave={() => handleSectionHover(sectionId, false)}
      id={sectionId}
      data-animate
    >
      <div style={styles.sectionTopBorder}></div>
      <div style={styles.sectionTitle}>
        {headers.title}
        <div style={styles.sectionTitleAfter}></div>
      </div>
      <div
        style={{
          ...(isMobile ? styles.categoryBadgeMobile : styles.categoryBadge),
          ...badgeStyle,
        }}
      >
        {headers.icon} {headers.category}
      </div>

      {/* Desktop Table */}
      <div className="mobile-hidden">
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              {headers.columns.map((header, index) => (
                <th key={index} style={styles.th}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                style={styles.tableRow}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    styles.tableRowHover.background;
                  e.currentTarget.style.transform =
                    styles.tableRowHover.transform;
                  e.currentTarget.style.boxShadow =
                    styles.tableRowHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={styles.td}>
                    {cellIndex === 0 ? (
                      <div style={styles.serialNumber}>{cell}</div>
                    ) : cellIndex === 2 && sectionId !== "celebrations" ? (
                      <span style={styles.importantDate}>{cell}</span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="mobile-visible">
        <div style={styles.mobileCardsContainer}>
          {data.map((row, rowIndex) =>
            renderMobileCard(row, headers, sectionId, rowIndex)
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{styles.globalReset}</style>
      <div style={styles.container}>
        {/* Floating Background Elements */}
        <div style={styles.floatingElements}>
          <div
            style={{
              ...styles.floatingCircle,
              width: "100px",
              height: "100px",
              top: "10%",
              left: "5%",
              animationDelay: "0s",
            }}
          />
          <div
            style={{
              ...styles.floatingCircle,
              width: "150px",
              height: "150px",
              top: "40%",
              right: "10%",
              animationDelay: "2s",
            }}
          />
          <div
            style={{
              ...styles.floatingCircle,
              width: "80px",
              height: "80px",
              top: "70%",
              left: "80%",
              animationDelay: "4s",
            }}
          />
          <div
            style={{
              ...styles.floatingCircle,
              width: "120px",
              height: "120px",
              top: "80%",
              left: "20%",
              animationDelay: "1s",
            }}
          />
        </div>

        <div style={styles.innerContainer}>
          <h1 style={styles.mainTitle}>
            Mount Summer Convent School Calendar 2025-26
            <div style={styles.titleUnderline}></div>
          </h1>

          {/* Vacation Schedule */}
          {renderTable(
            vacationData,
            {
              title: "Vacation Schedule",
              category: "Vacation Periods",
              icon: "🌴",
              columns: ["Sl. No.", "Holidays", "Date", "Day", "No. of Days"],
            },
            styles.vacationBadge,
            "vacation"
          )}

          {/* Examination Dates */}
          {renderTable(
            examData,
            {
              title: "Tentative Examination Dates",
              category: "Assessment Schedule",
              icon: "📝",
              columns: ["Sl. No.", "Examination", "Date of Examination"],
            },
            styles.examBadge,
            "exams"
          )}

          {/* School Celebrations */}
          {renderTable(
            celebrationData,
            {
              title: "School Celebrations",
              category: "Special Events",
              icon: "🎉",
              columns: ["Sl. No.", "Occasion", "Date"],
            },
            styles.celebrationBadge,
            "celebrations"
          )}

          {/* Holiday Schedule */}
          <div
            style={{
              ...(isMobile ? styles.sectionMobile : styles.section),
              ...(activeSection === "holidays" ? styles.sectionHover : {}),
              transform: isVisible.holidays
                ? "translateY(0)"
                : "translateY(50px)",
              opacity: isVisible.holidays ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={() => handleSectionHover("holidays", true)}
            onMouseLeave={() => handleSectionHover("holidays", false)}
            id="holidays"
            data-animate
          >
            <div style={styles.sectionTopBorder}></div>
            <div style={styles.sectionTitle}>
              Holiday Schedule
              <div style={styles.sectionTitleAfter}></div>
            </div>
            <div
              style={{
                ...(isMobile
                  ? styles.categoryBadgeMobile
                  : styles.categoryBadge),
                ...styles.holidayBadge,
              }}
            >
              🎊 Religious & National Holidays
            </div>

            {/* Desktop Table */}
            <div className="mobile-hidden">
              <table style={styles.table}>
                <thead style={styles.tableHeader}>
                  <tr>
                    {["Sl. No.", "Holidays", "Date", "Day", "No. of Days"].map(
                      (header, index) => (
                        <th key={index} style={styles.th}>
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {holidayData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      style={styles.tableRow}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          styles.tableRowHover.background;
                        e.currentTarget.style.transform =
                          styles.tableRowHover.transform;
                        e.currentTarget.style.boxShadow =
                          styles.tableRowHover.boxShadow;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} style={styles.td}>
                          {cellIndex === 0 ? (
                            <div style={styles.serialNumber}>{cell}</div>
                          ) : cellIndex === 2 ? (
                            <span style={styles.importantDate}>{cell}</span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="mobile-visible">
              <div style={styles.mobileCardsContainer}>
                {holidayData.map((row, rowIndex) =>
                  renderMobileCard(
                    row,
                    {
                      title: "Holiday Schedule",
                      category: "Religious & National Holidays",
                      icon: "🎊",
                    },
                    "holidays",
                    rowIndex
                  )
                )}
              </div>
            </div>

            <div style={isMobile ? styles.notesMobile : styles.notes}>
              <div style={styles.notesIcon}>ℹ️</div>
              <p
                style={
                  isMobile ? styles.notesParagraphMobile : styles.notesParagraph
                }
              >
                * Dates may change due to unforeseen circumstances, moon
                visibility, etc.
              </p>
              <p
                style={
                  isMobile ? styles.notesParagraphMobile : styles.notesParagraph
                }
              >
                * All Jayanti celebrations will take place in school; no
                holidays.
              </p>
              <p
                style={
                  isMobile ? styles.notesParagraphMobile : styles.notesParagraph
                }
              >
                * Summer Vacation dates may change based on weather conditions.
              </p>
            </div>
          </div>

          {/* Session Year Footer */}
          <div style={isMobile ? styles.sessionYearMobile : styles.sessionYear}>
            <div style={styles.sessionYearBg}></div>
            <div style={{ position: "relative", zIndex: 1 }}>
              Academic Session 2025–26
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
