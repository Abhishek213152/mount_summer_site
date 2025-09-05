// About.jsx

import mountLogo from "../assets/mountlogo.png";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <img src={mountLogo} alt="Mount Summer Logo" className="about-logo" />
        <h1>Mount Summer Convent School</h1>
        <p className="hero-subtitle">Shaping minds, building values.</p>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to Mount Summer Convent School, a beacon of educational
          excellence in Darbhanga. We are committed to nurturing well-rounded
          individuals through a holistic approach to education, blending
          academic rigor, spiritual growth, and personal development.
        </p>
        <p>
          Our school is known for academic excellence, world-class
          infrastructure, and enriching co-curricular programs. Facilities
          include a spacious library, music & dance studios, language labs, and
          modern science labs—all supported by tech-enabled classrooms.
        </p>
      </section>

      {/* Mission, Aim, Goal */}
      <section className="about-values">
        <div className="value-card">
          <h3>Our Mission</h3>
          <p>
            To develop morally upright, intellectually curious, and culturally
            rooted citizens who are proud of their heritage and driven by
            innovation and compassion.
          </p>
        </div>
        <div className="value-card">
          <h3>Aim</h3>
          <p>
            "The aim of education is the knowledge not of facts but of values."
            We guide students to grow through diverse academic and creative
            exposure.
          </p>
        </div>
        <div className="value-card">
          <h3>Our Goal</h3>
          <p>
            To empower students with knowledge, confidence, and social
            awareness, equipping them to take on life’s challenges as resilient,
            self-assured individuals.
          </p>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default About;
