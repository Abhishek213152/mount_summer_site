// src/components/Calender.jsx
import React, { useState, useMemo } from "react";
import "./Calender.css";

const Calendar = () => {
  const [selectedSession, setSelectedSession] = useState("2026-27"); // Default to 2026-2027 extended
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // ==========================================
  // Comprehensive Holiday & Academic Datasets
  // ==========================================

  // 1. Vacation Schedules
  const allVacations = useMemo(
    () => [
      // 2026-2027 Academic Year (Till April 2027)
      {
        session: "2026-27",
        sl: "01",
        title: "Summer Vacation 2026",
        date: "01-06-2026 to 24-06-2026",
        day: "Monday to Wednesday",
        days: "24",
        category: "vacation",
      },
      {
        session: "2026-27",
        sl: "02",
        title: "Durga Puja Vacation 2026",
        date: "17-10-2026 to 22-10-2026",
        day: "Saturday to Thursday",
        days: "06",
        category: "vacation",
      },
      {
        session: "2026-27",
        sl: "03",
        title: "Dipawali & Chhath Puja 2026",
        date: "08-11-2026 to 17-11-2026",
        day: "Sunday to Tuesday",
        days: "10",
        category: "vacation",
      },
      {
        session: "2026-27",
        sl: "04",
        title: "Winter Break & New Year 2027",
        date: "30-12-2026 to 02-01-2027",
        day: "Wednesday to Saturday",
        days: "04",
        category: "vacation",
      },
      {
        session: "2026-27",
        sl: "05",
        title: "Holi Vacation 2027",
        date: "21-03-2027 to 24-03-2027",
        day: "Sunday to Wednesday",
        days: "04",
        category: "vacation",
      },

      // 2025-2026 Academic Year
      {
        session: "2025-26",
        sl: "01",
        title: "Summer Vacation 2025",
        date: "04-06-2025 to 25-06-2025",
        day: "Wednesday to Wednesday",
        days: "22",
        category: "vacation",
      },
      {
        session: "2025-26",
        sl: "02",
        title: "Durga Puja Vacation 2025",
        date: "27-09-2025 to 03-10-2025",
        day: "Saturday to Friday",
        days: "07",
        category: "vacation",
      },
      {
        session: "2025-26",
        sl: "03",
        title: "Dipawali & Chhath 2025",
        date: "20-10-2025 to 30-10-2025",
        day: "Monday to Thursday",
        days: "10",
        category: "vacation",
      },
    ],
    []
  );

  // 2. Examination Schedules
  const allExams = useMemo(
    () => [
      // 2026-2027 Academic Year (Till April 2027)
      {
        session: "2026-27",
        sl: "01",
        title: "Periodic Assessment - I (P.A. - I)",
        date: "18-05-2026 to 23-05-2026",
        day: "Monday to Saturday",
        days: "06",
        category: "exams",
      },
      {
        session: "2026-27",
        sl: "02",
        title: "Periodic Assessment - II (P.A. - II)",
        date: "10-08-2026 to 14-08-2026",
        day: "Monday to Friday",
        days: "05",
        category: "exams",
      },
      {
        session: "2026-27",
        sl: "03",
        title: "Half Yearly Examination (Term - I)",
        date: "21-09-2026 to 28-09-2026",
        day: "Monday to Monday",
        days: "07",
        category: "exams",
      },
      {
        session: "2026-27",
        sl: "04",
        title: "Periodic Assessment - III (P.A. - III)",
        date: "23-11-2026 to 28-11-2026",
        day: "Monday to Saturday",
        days: "06",
        category: "exams",
      },
      {
        session: "2026-27",
        sl: "05",
        title: "Periodic Assessment - IV (P.A. - IV)",
        date: "18-01-2027 to 23-01-2027",
        day: "Monday to Saturday",
        days: "06",
        category: "exams",
      },
      {
        session: "2026-27",
        sl: "06",
        title: "Final Annual Examination (Term - II)",
        date: "12-03-2027 to 22-03-2027",
        day: "Friday to Monday",
        days: "10",
        category: "exams",
      },
      {
        session: "2026-27",
        sl: "07",
        title: "Annual Result Declaration & Promotion",
        date: "05-04-2027 to 08-04-2027",
        day: "Monday to Thursday",
        days: "04",
        category: "exams",
      },

      // 2025-2026 Academic Year
      {
        session: "2025-26",
        sl: "01",
        title: "P.A. - I",
        date: "20-05-2025 to 24-05-2025",
        day: "Tuesday to Saturday",
        days: "05",
        category: "exams",
      },
      {
        session: "2025-26",
        sl: "02",
        title: "P.A. - II",
        date: "07-08-2025 to 13-08-2025",
        day: "Thursday to Wednesday",
        days: "06",
        category: "exams",
      },
      {
        session: "2025-26",
        sl: "03",
        title: "Half Yearly Examination",
        date: "20-09-2025 to 26-09-2025",
        day: "Saturday to Friday",
        days: "07",
        category: "exams",
      },
      {
        session: "2025-26",
        sl: "04",
        title: "P.A. - III",
        date: "25-11-2025 to 29-11-2025",
        day: "Tuesday to Saturday",
        days: "05",
        category: "exams",
      },
      {
        session: "2025-26",
        sl: "05",
        title: "P.A. - IV",
        date: "20-01-2026 to 24-01-2026",
        day: "Tuesday to Saturday",
        days: "05",
        category: "exams",
      },
      {
        session: "2025-26",
        sl: "06",
        title: "Final Examination",
        date: "10-03-2026 to 20-03-2026",
        day: "Tuesday to Friday",
        days: "10",
        category: "exams",
      },
    ],
    []
  );

  // 3. School Celebrations
  const allCelebrations = useMemo(
    () => [
      // 2026-2027 Academic Year (Till April 2027)
      {
        session: "2026-27",
        sl: "01",
        title: "Ambedkar Jayanti",
        date: "14th April 2026",
        day: "Tuesday",
        category: "celebrations",
      },
      {
        session: "2026-27",
        sl: "02",
        title: "Mount Summer Foundation Day",
        date: "17th June 2026",
        day: "Wednesday",
        category: "celebrations",
      },
      {
        session: "2026-27",
        sl: "03",
        title: "Independence Day Celebrations",
        date: "15th August 2026",
        day: "Saturday",
        category: "celebrations",
      },
      {
        session: "2026-27",
        sl: "04",
        title: "Teacher's Day & Special Felicitations",
        date: "5th September 2026",
        day: "Saturday",
        category: "celebrations",
      },
      {
        session: "2026-27",
        sl: "05",
        title: "Gandhi Jayanti & Shastri Jayanti",
        date: "2nd October 2026",
        day: "Friday",
        category: "celebrations",
      },
      {
        session: "2026-27",
        sl: "06",
        title: "Children's Day & Annual Sports Carnival",
        date: "14th November 2026",
        day: "Saturday",
        category: "celebrations",
      },
      {
        session: "2026-27",
        sl: "07",
        title: "Dr. Rajendra Prasad Jayanti",
        date: "3rd December 2026",
        day: "Thursday",
        category: "celebrations",
      },
      {
        session: "2026-27",
        sl: "08",
        title: "Republic Day Parade & Flag Hoisting",
        date: "26th January 2027",
        day: "Tuesday",
        category: "celebrations",
      },
      {
        session: "2026-27",
        sl: "09",
        title: "Ambedkar Jayanti 2027",
        date: "14th April 2027",
        day: "Wednesday",
        category: "celebrations",
      },
      {
        session: "2026-27",
        sl: "10",
        title: "Mount Summer Annual Exhibition & Awards",
        date: "24th April 2027",
        day: "Saturday",
        category: "celebrations",
      },

      // 2025-2026 Academic Year
      {
        session: "2025-26",
        sl: "01",
        title: "Ambedkar Jayanti",
        date: "14th April 2025",
        day: "Monday",
        category: "celebrations",
      },
      {
        session: "2025-26",
        sl: "02",
        title: "Mount Summer Foundation Day",
        date: "17th June 2025",
        day: "Tuesday",
        category: "celebrations",
      },
      {
        session: "2025-26",
        sl: "03",
        title: "Independence Day",
        date: "15th August 2025",
        day: "Friday",
        category: "celebrations",
      },
      {
        session: "2025-26",
        sl: "04",
        title: "Teacher's Day",
        date: "5th September 2025",
        day: "Friday",
        category: "celebrations",
      },
      {
        session: "2025-26",
        sl: "05",
        title: "Gandhi Jayanti",
        date: "2nd October 2025",
        day: "Thursday",
        category: "celebrations",
      },
      {
        session: "2025-26",
        sl: "06",
        title: "Children's Day",
        date: "14th November 2025",
        day: "Friday",
        category: "celebrations",
      },
      {
        session: "2025-26",
        sl: "07",
        title: "Dr. Rajendra Prasad Jayanti",
        date: "3rd December 2025",
        day: "Wednesday",
        category: "celebrations",
      },
      {
        session: "2025-26",
        sl: "08",
        title: "Republic Day",
        date: "26th January 2026",
        day: "Monday",
        category: "celebrations",
      },
    ],
    []
  );

  // 4. Religious & National Holiday Schedule (Extended through April 2027)
  const allHolidays = useMemo(
    () => [
      // 2026-2027 Academic Year (Till April 2027)
      {
        session: "2026-27",
        sl: "01",
        title: "Ram Navami",
        date: "17-04-2026",
        day: "Friday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "02",
        title: "Mahavir Jayanti",
        date: "20-04-2026",
        day: "Monday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "03",
        title: "Buddha Purnima",
        date: "01-05-2026",
        day: "Friday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "04",
        title: "Eid-Ul-Azha (Bakrid)",
        date: "27-05-2026",
        day: "Wednesday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "05",
        title: "Muharram",
        date: "26-06-2026",
        day: "Friday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "06",
        title: "Raksha Bandhan",
        date: "28-08-2026",
        day: "Friday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "07",
        title: "Janmashtami",
        date: "04-09-2026",
        day: "Friday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "08",
        title: "Milad-un-Nabi (Eid-e-Milad)",
        date: "15-09-2026",
        day: "Tuesday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "09",
        title: "Vishwakarma Puja",
        date: "17-09-2026",
        day: "Thursday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "10",
        title: "Guru Nanak Jayanti",
        date: "24-11-2026",
        day: "Tuesday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "11",
        title: "Christmas Day",
        date: "25-12-2026",
        day: "Friday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "12",
        title: "New Year's Day 2027",
        date: "01-01-2027",
        day: "Friday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "13",
        title: "Makar Sankranti",
        date: "14-01-2027",
        day: "Thursday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "14",
        title: "Guru Gobind Singh Jayanti",
        date: "15-01-2027",
        day: "Friday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "15",
        title: "Vasant Panchami (Saraswati Puja)",
        date: "11-02-2027",
        day: "Thursday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "16",
        title: "Maha Shivratri",
        date: "06-03-2027",
        day: "Saturday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "17",
        title: "Eid-ul-Fitr",
        date: "10-03-2027",
        day: "Wednesday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "18",
        title: "Holi Celebrations",
        date: "22-03-2027 to 24-03-2027",
        day: "Mon–Wed",
        days: "03",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "19",
        title: "Good Friday",
        date: "26-03-2027",
        day: "Friday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "20",
        title: "Ram Navami 2027",
        date: "06-04-2027",
        day: "Tuesday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "21",
        title: "Ambedkar Jayanti 2027",
        date: "14-04-2027",
        day: "Wednesday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2026-27",
        sl: "22",
        title: "Mahavir Jayanti 2027",
        date: "19-04-2027",
        day: "Monday",
        days: "01",
        category: "holidays",
      },

      // 2025-2026 Academic Year
      {
        session: "2025-26",
        sl: "01",
        title: "Ram Navami",
        date: "06-04-2025",
        day: "Sunday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "02",
        title: "Eid-Ul-Azha",
        date: "07-06-2025",
        day: "Saturday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "03",
        title: "Muharram",
        date: "06-07-2025",
        day: "Sunday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "04",
        title: "Raksha Bandhan",
        date: "09-08-2025",
        day: "Saturday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "05",
        title: "Janmashtami",
        date: "16-08-2025",
        day: "Saturday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "06",
        title: "Ganesh Chaturthi",
        date: "28-08-2025",
        day: "Thursday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "07",
        title: "Vishwakarma Puja",
        date: "17-09-2025",
        day: "Wednesday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "08",
        title: "Christmas",
        date: "25-12-2025",
        day: "Thursday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "09",
        title: "New Year",
        date: "31-12-2025 to 01-01-2026",
        day: "Wed–Thu",
        days: "02",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "10",
        title: "Makar Sankranti",
        date: "14-01-2026",
        day: "Wednesday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "11",
        title: "Vasant Panchami",
        date: "21-01-2026",
        day: "Wednesday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "12",
        title: "Maha Shivratri",
        date: "15-02-2026",
        day: "Sunday",
        days: "01",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "13",
        title: "Holi",
        date: "04-03-2026 to 06-03-2026",
        day: "Wed–Fri",
        days: "03",
        category: "holidays",
      },
      {
        session: "2025-26",
        sl: "14",
        title: "Id-ul-Fiter",
        date: "21-03-2026",
        day: "Saturday",
        days: "01",
        category: "holidays",
      },
    ],
    []
  );

  // Filter helper based on session and search
  const filterList = (items) => {
    return items.filter((item) => {
      const matchesSession =
        selectedSession === "all" || item.session === selectedSession;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.day && item.day.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSession && matchesSearch;
    });
  };

  const currentVacations = useMemo(
    () => filterList(allVacations),
    [allVacations, selectedSession, searchQuery]
  );
  const currentExams = useMemo(
    () => filterList(allExams),
    [allExams, selectedSession, searchQuery]
  );
  const currentCelebrations = useMemo(
    () => filterList(allCelebrations),
    [allCelebrations, selectedSession, searchQuery]
  );
  const currentHolidays = useMemo(
    () => filterList(allHolidays),
    [allHolidays, selectedSession, searchQuery]
  );

  const totalEventCount =
    currentVacations.length +
    currentExams.length +
    currentCelebrations.length +
    currentHolidays.length;

  return (
    <div className="calendar-page-wrapper">
      {/* Playful Floating Academic Ambient Icons */}
      <div className="calendar-ambient-floats" aria-hidden="true">
        <span className="school-float-icon icon-1">🎓</span>
        <span className="school-float-icon icon-2">📚</span>
        <span className="school-float-icon icon-3">✨</span>
        <span className="school-float-icon icon-4">🏆</span>
        <span className="school-float-icon icon-5">🎨</span>
        <span className="school-float-icon icon-6">⚽</span>
        <span className="school-float-icon icon-7">🌟</span>
      </div>

      <div className="calendar-main-container">
        {/* Glossy Hero Card */}
        <section className="calendar-hero-card">
          <div className="calendar-top-eyebrow">
            <span>✨</span> Mount Summer Academic Portal
          </div>
          <h1 className="calendar-hero-title">
            Academic Calendar & <span>Holiday List</span>
          </h1>
          <p className="calendar-hero-subtitle">
            Official scholastic schedule, comprehensive term examinations, vacations,
            and complete holiday list extended up to <strong>April 2027</strong>.
          </p>

          {/* Next Upcoming Live Banner */}
          <div className="calendar-next-event-banner">
            <span className="live-indicator">
              <span className="live-dot"></span> Next Milestone
            </span>
            <span>
              {selectedSession === "2026-27"
                ? "Academic Session 2026–27 Openings & Orientation • April 2026"
                : "Upcoming Periodic Assessments & Foundation Festivities"}
            </span>
          </div>
        </section>

        {/* Glossy Toolbar: Session Switcher, Category Filters, Search */}
        <section className="calendar-controls-bar">
          {/* Academic Session Switcher */}
          <div className="session-switcher-container">
            <div className="session-switcher-glass">
              <button
                className={`session-tab-btn ${
                  selectedSession === "2026-27" ? "active" : ""
                }`}
                onClick={() => setSelectedSession("2026-27")}
              >
                <span>Session 2026–2027</span>
                <span className="session-extended-tag">Till April 2027</span>
              </button>
              <button
                className={`session-tab-btn ${
                  selectedSession === "2025-26" ? "active" : ""
                }`}
                onClick={() => setSelectedSession("2025-26")}
              >
                <span>Session 2025–2026</span>
              </button>
              <button
                className={`session-tab-btn ${
                  selectedSession === "all" ? "active" : ""
                }`}
                onClick={() => setSelectedSession("all")}
              >
                <span>All Dates (2025–2027)</span>
              </button>
            </div>
          </div>

          {/* Filter Tabs and Live Search Box */}
          <div className="calendar-filter-row">
            <div className="calendar-category-tabs">
              <button
                className={`cat-filter-btn ${
                  activeCategory === "all" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("all")}
              >
                <span>All Categories</span>
                <span className="cat-filter-count">{totalEventCount}</span>
              </button>
              <button
                className={`cat-filter-btn ${
                  activeCategory === "vacation" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("vacation")}
              >
                <span>🌴 Vacations</span>
                <span className="cat-filter-count">
                  {currentVacations.length}
                </span>
              </button>
              <button
                className={`cat-filter-btn ${
                  activeCategory === "exams" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("exams")}
              >
                <span>📝 Exams</span>
                <span className="cat-filter-count">{currentExams.length}</span>
              </button>
              <button
                className={`cat-filter-btn ${
                  activeCategory === "celebrations" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("celebrations")}
              >
                <span>🎉 Celebrations</span>
                <span className="cat-filter-count">
                  {currentCelebrations.length}
                </span>
              </button>
              <button
                className={`cat-filter-btn ${
                  activeCategory === "holidays" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("holidays")}
              >
                <span>🎊 Holidays</span>
                <span className="cat-filter-count">
                  {currentHolidays.length}
                </span>
              </button>
            </div>

            {/* Glossy Search Box */}
            <div className="calendar-search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search event, holiday or month..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search calendar"
              />
              {searchQuery && (
                <button
                  className="clear-search"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 1. Vacation Schedule Section */}
        {(activeCategory === "all" || activeCategory === "vacation") &&
          currentVacations.length > 0 && (
            <article className="calendar-section-card">
              <div className="calendar-card-top-glow"></div>
              <div className="calendar-section-header">
                <div className="section-title-wrap">
                  <h2 className="section-main-title">Vacation Schedule</h2>
                  <span className="section-period-tag">
                    {selectedSession === "2026-27"
                      ? "Academic Year 2026–27 (Till April 2027)"
                      : selectedSession === "2025-26"
                      ? "Academic Year 2025–26"
                      : "Multi-Year Vacation Schedule"}
                  </span>
                </div>
                <div className="calendar-category-badge badge-vacation">
                  🌴 Vacation Breaks
                </div>
              </div>

              {/* Desktop Table */}
              <div className="calendar-table-responsive">
                <table className="calendar-glossy-table">
                  <thead>
                    <tr>
                      <th style={{ width: "90px" }}>Sl. No.</th>
                      <th>Holiday Occasion</th>
                      <th>Date Range</th>
                      <th>Days of Week</th>
                      <th style={{ textAlign: "center" }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentVacations.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <span className="event-sl-badge">{item.sl}</span>
                        </td>
                        <td className="event-title-cell">{item.title}</td>
                        <td>
                          <span className="event-date-highlight">
                            {item.date}
                          </span>
                        </td>
                        <td>{item.day}</td>
                        <td style={{ textAlign: "center" }}>
                          <span className="event-days-pill">
                            ⏳ {item.days} Days
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="calendar-mobile-cards-wrap">
                {currentVacations.map((item, idx) => (
                  <div key={idx} className="calendar-mobile-card">
                    <div className="mob-card-head">
                      <span className="mob-card-number">{item.sl}</span>
                      <h3 className="mob-card-title">{item.title}</h3>
                    </div>
                    <div className="mob-card-details">
                      <div className="mob-detail-row">
                        <span className="mob-detail-label">Dates</span>
                        <span className="mob-date-val">{item.date}</span>
                      </div>
                      <div className="mob-detail-row">
                        <span className="mob-detail-label">Schedule</span>
                        <span className="mob-detail-val">{item.day}</span>
                      </div>
                      <div className="mob-detail-row">
                        <span className="mob-detail-label">Duration</span>
                        <span className="event-days-pill">
                          {item.days} Days
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}

        {/* 2. Examination Dates Section */}
        {(activeCategory === "all" || activeCategory === "exams") &&
          currentExams.length > 0 && (
            <article className="calendar-section-card">
              <div className="calendar-card-top-glow"></div>
              <div className="calendar-section-header">
                <div className="section-title-wrap">
                  <h2 className="section-main-title">
                    Tentative Examination Dates
                  </h2>
                  <span className="section-period-tag">
                    Continuous Comprehensive Evaluation & Board Pattern
                  </span>
                </div>
                <div className="calendar-category-badge badge-exams">
                  📝 Assessment Schedule
                </div>
              </div>

              {/* Desktop Table */}
              <div className="calendar-table-responsive">
                <table className="calendar-glossy-table">
                  <thead>
                    <tr>
                      <th style={{ width: "90px" }}>Sl. No.</th>
                      <th>Examination Name</th>
                      <th>Date of Examination</th>
                      <th>Days of Week</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentExams.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <span className="event-sl-badge">{item.sl}</span>
                        </td>
                        <td className="event-title-cell">{item.title}</td>
                        <td>
                          <span className="event-date-highlight">
                            {item.date}
                          </span>
                        </td>
                        <td>{item.day || "Regular School Schedule"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="calendar-mobile-cards-wrap">
                {currentExams.map((item, idx) => (
                  <div key={idx} className="calendar-mobile-card">
                    <div className="mob-card-head">
                      <span className="mob-card-number">{item.sl}</span>
                      <h3 className="mob-card-title">{item.title}</h3>
                    </div>
                    <div className="mob-card-details">
                      <div className="mob-detail-row">
                        <span className="mob-detail-label">Exam Window</span>
                        <span className="mob-date-val">{item.date}</span>
                      </div>
                      {item.day && (
                        <div className="mob-detail-row">
                          <span className="mob-detail-label">Day</span>
                          <span className="mob-detail-val">{item.day}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}

        {/* 3. School Celebrations Section */}
        {(activeCategory === "all" || activeCategory === "celebrations") &&
          currentCelebrations.length > 0 && (
            <article className="calendar-section-card">
              <div className="calendar-card-top-glow"></div>
              <div className="calendar-section-header">
                <div className="section-title-wrap">
                  <h2 className="section-main-title">School Celebrations</h2>
                  <span className="section-period-tag">
                    Cultural Heritage, Patriotism & Student Milestones
                  </span>
                </div>
                <div className="calendar-category-badge badge-celebrations">
                  🎉 Special Events
                </div>
              </div>

              {/* Desktop Table */}
              <div className="calendar-table-responsive">
                <table className="calendar-glossy-table">
                  <thead>
                    <tr>
                      <th style={{ width: "90px" }}>Sl. No.</th>
                      <th>Occasion / Commemoration</th>
                      <th>Celebration Date</th>
                      <th>Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentCelebrations.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <span className="event-sl-badge">{item.sl}</span>
                        </td>
                        <td className="event-title-cell">{item.title}</td>
                        <td>
                          <span className="event-date-highlight">
                            {item.date}
                          </span>
                        </td>
                        <td>{item.day}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="calendar-mobile-cards-wrap">
                {currentCelebrations.map((item, idx) => (
                  <div key={idx} className="calendar-mobile-card">
                    <div className="mob-card-head">
                      <span className="mob-card-number">{item.sl}</span>
                      <h3 className="mob-card-title">{item.title}</h3>
                    </div>
                    <div className="mob-card-details">
                      <div className="mob-detail-row">
                        <span className="mob-detail-label">Date</span>
                        <span className="mob-date-val">{item.date}</span>
                      </div>
                      <div className="mob-detail-row">
                        <span className="mob-detail-label">Day</span>
                        <span className="mob-detail-val">{item.day}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}

        {/* 4. Religious & National Holiday Schedule (Till April 2027) */}
        {(activeCategory === "all" || activeCategory === "holidays") &&
          currentHolidays.length > 0 && (
            <article className="calendar-section-card">
              <div className="calendar-card-top-glow"></div>
              <div className="calendar-section-header">
                <div className="section-title-wrap">
                  <h2 className="section-main-title">
                    Holiday Schedule (Through April 2027)
                  </h2>
                  <span className="section-period-tag">
                    Official Gazette Holidays & Observances
                  </span>
                </div>
                <div className="calendar-category-badge badge-holidays">
                  🎊 Religious & National Holidays
                </div>
              </div>

              {/* Desktop Table */}
              <div className="calendar-table-responsive">
                <table className="calendar-glossy-table">
                  <thead>
                    <tr>
                      <th style={{ width: "90px" }}>Sl. No.</th>
                      <th>Holiday Occasion</th>
                      <th>Date</th>
                      <th>Day</th>
                      <th style={{ textAlign: "center" }}>No. of Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentHolidays.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <span className="event-sl-badge">{item.sl}</span>
                        </td>
                        <td className="event-title-cell">{item.title}</td>
                        <td>
                          <span className="event-date-highlight">
                            {item.date}
                          </span>
                        </td>
                        <td>{item.day}</td>
                        <td style={{ textAlign: "center" }}>
                          <span className="event-days-pill">
                            {item.days} Day{item.days > 1 ? "s" : ""}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="calendar-mobile-cards-wrap">
                {currentHolidays.map((item, idx) => (
                  <div key={idx} className="calendar-mobile-card">
                    <div className="mob-card-head">
                      <span className="mob-card-number">{item.sl}</span>
                      <h3 className="mob-card-title">{item.title}</h3>
                    </div>
                    <div className="mob-card-details">
                      <div className="mob-detail-row">
                        <span className="mob-detail-label">Date</span>
                        <span className="mob-date-val">{item.date}</span>
                      </div>
                      <div className="mob-detail-row">
                        <span className="mob-detail-label">Day</span>
                        <span className="mob-detail-val">{item.day}</span>
                      </div>
                      <div className="mob-detail-row">
                        <span className="mob-detail-label">Duration</span>
                        <span className="event-days-pill">
                          {item.days} Day{item.days > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Guidelines Notice */}
              <div className="calendar-guidelines-box">
                <div className="guidelines-title">
                  <span>ℹ️</span> Important School Calendar Guidelines
                </div>
                <ul className="guidelines-list">
                  <li>
                    Dates for religious festivals such as Eid, Muharram, and Chhath
                    are subject to the sighting of the moon and Bihar State Government notifications.
                  </li>
                  <li>
                    All National Days and Jayanti celebrations (Gandhi Jayanti, Ambedkar
                    Jayanti, Republic Day, Independence Day) are celebrated on campus with full student participation.
                  </li>
                  <li>
                    Summer and Winter break durations are subject to prevailing weather and administrative directives from the district administration of Darbhanga.
                  </li>
                </ul>
              </div>
            </article>
          )}

        {/* Empty State when search has no matches */}
        {totalEventCount === 0 && (
          <div className="calendar-section-card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📅</div>
            <h3 style={{ fontSize: "1.4rem", color: "#0f172a", marginBottom: "0.5rem" }}>
              No calendar events found matching "{searchQuery}"
            </h3>
            <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
              Try searching with another keyword or reset the session filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              style={{
                background: "#1e40af",
                color: "#fff",
                border: "none",
                padding: "0.65rem 1.8rem",
                borderRadius: "9999px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Session Footer Summary */}
        <footer className="calendar-session-footer">
          <h3>Mount Summer Convent School • Darbhanga</h3>
          <p>
            Polo Field Road, K.M. Tank, Laheriasarai, Darbhanga – 846001 • Academic
            Session 2025–2026 & 2026–2027 Extended Calendar
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Calendar;
