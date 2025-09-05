import React from 'react';
import alumni1 from '../assets/alumni1.jpeg';

const Principal = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #e8eaf6 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      width: '100%',
      overflowX: 'hidden'
    },
    header: {
      background: 'linear-gradient(135deg, #1565c0 0%, #3949ab 100%)',
      color: 'white',
      padding: '4rem 0',
      textAlign: 'center'
    },
    headerTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    headerDivider: {
      width: '96px',
      height: '4px',
      background: '#ffc107',
      margin: '0 auto',
      borderRadius: '2px'
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 1.5rem'
    },
    principalInfo: {
      background: 'white',
      borderRadius: '1rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      padding: '2rem',
      marginBottom: '3rem',
      borderTop: '4px solid #1976d2'
    },
    principalFlex: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      flexWrap: 'wrap'
    },
    photoContainer: {
      flexShrink: 0
    },
    photo: {
      width: '192px',
      height: '192px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '4px solid white',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    principalDetails: {
      textAlign: 'center',
      flex: 1
    },
    principalName: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    principalTitle: {
      fontSize: '1.125rem',
      color: '#2563eb',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    dividerGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem'
    },
    dividerPrimary: {
      width: '48px',
      height: '4px',
      background: '#2563eb',
      borderRadius: '2px'
    },
    dividerSecondary: {
      width: '32px',
      height: '4px',
      background: '#ffc107',
      borderRadius: '2px'
    },
    dividerTertiary: {
      width: '16px',
      height: '4px',
      background: '#2563eb',
      borderRadius: '2px'
    },
    welcomeSection: {
      background: 'white',
      borderRadius: '1rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      padding: '2rem',
      marginBottom: '2rem'
    },
    welcomeHeader: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    welcomeTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    welcomeSubtitle: {
      fontSize: '1.25rem',
      color: '#2563eb',
      fontWeight: '600',
      fontStyle: 'italic'
    },
    messageContent: {
      color: '#374151',
      lineHeight: '1.8'
    },
    messageParagraph: {
      fontSize: '1.125rem',
      marginBottom: '1.5rem'
    },
    closingSection: {
      background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
      color: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      textAlign: 'center',
      marginBottom: '4rem'
    },
    closingTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    closingSubtitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#dbeafe'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '4rem'
    },
    valueCard: {
      background: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      textAlign: 'center'
    },
    valueIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    valueTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    valueDescription: {
      color: '#6b7280'
    }
  };

  return (
    <div style={styles.container}>
      {/* GLOBAL RESET to fix margin issues */}
      <style>{`
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
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Principal's Message</h1>
        <div style={styles.headerDivider}></div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Principal Info */}
        <div style={styles.principalInfo}>
          <div style={styles.principalFlex}>
            <div style={styles.photoContainer}>
              <img src={alumni1} alt="Principal" style={styles.photo} />
            </div>
            <div style={styles.principalDetails}>
              <h2 style={styles.principalName}>Mr. Nitish Kumar</h2>
              <p style={styles.principalTitle}>Principal, Mount Summer Convent School</p>
              <div style={styles.dividerGroup}>
                <div style={styles.dividerPrimary}></div>
                <div style={styles.dividerSecondary}></div>
                <div style={styles.dividerTertiary}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div style={styles.welcomeSection}>
          <div style={styles.welcomeHeader}>
            <h2 style={styles.welcomeTitle}>Welcome to Mount Summer Convent School</h2>
            <p style={styles.welcomeSubtitle}>Where Learning Inspires, Values Lead, and Futures are Forged</p>
          </div>

          <div style={styles.messageContent}>
            <p style={styles.messageParagraph}>
              At Mount Summer Convent School, we take immense pride in nurturing curious minds and shaping responsible,
              well-rounded individuals who are prepared to thrive in an ever-evolving world. Our philosophy goes beyond
              textbooks and examinations — we believe in cultivating the intellect, character, creativity, and emotional
              intelligence of every student who walks through our doors.
            </p>
            <p style={styles.messageParagraph}>
              With a strong and unwavering emphasis on academic excellence, we deliver a dynamic and engaging curriculum
              that challenges students to think critically, innovate freely, and pursue knowledge with passion. But true
              education extends far beyond academic performance — it lies in the development of integrity, resilience,
              empathy, and a lifelong thirst for learning.
            </p>
            <p style={styles.messageParagraph}>
              Our school offers a vibrant, inclusive, and student-centric environment where learners are encouraged to explore
              their interests, ask meaningful questions, embrace diverse perspectives, and grow into confident and compassionate
              individuals. Through a wide array of co-curricular and extracurricular activities — from arts, music, and sports
              to leadership initiatives and social outreach programs — we aim to unlock each child's full potential.
            </p>
            <p style={styles.messageParagraph}>
              We are deeply committed to fostering a culture where mutual respect, discipline, curiosity, and ethical values are
              not just taught, but lived. Our dedicated team of educators serve not only as instructors but as mentors and role
              models, guiding students with care, patience, and purpose every step of the way.
            </p>
            <p style={styles.messageParagraph}>
              At Mount Summer Convent School, we understand that the future will belong to those who are not only knowledgeable
              but also kind, courageous, and socially conscious. That is why we continuously strive to equip our students with
              the skills, confidence, and moral compass they need to face the challenges of tomorrow and lead with conviction
              and compassion.
            </p>
          </div>
        </div>

        {/* Closing Message */}
        <div style={styles.closingSection}>
          <h3 style={styles.closingTitle}>
            Here, we don't just prepare students for academic success — we prepare them for life.
          </h3>
          <p style={styles.closingSubtitle}>
            Mount Summer Convent School: Where minds are inspired, hearts are nurtured, and legacies begin.
          </p>
        </div>

        {/* Values Section */}
        <div style={styles.valuesGrid}>
          <div style={styles.valueCard}>
            <div style={styles.valueIcon}>🎓</div>
            <h4 style={styles.valueTitle}>Academic Excellence</h4>
            <p style={styles.valueDescription}>
              Delivering a dynamic curriculum that challenges students to think critically and innovate freely.
            </p>
          </div>
          <div style={styles.valueCard}>
            <div style={styles.valueIcon}>💝</div>
            <h4 style={styles.valueTitle}>Character Development</h4>
            <p style={styles.valueDescription}>
              Fostering integrity, resilience, empathy, and a lifelong thirst for learning.
            </p>
          </div>
          <div style={styles.valueCard}>
            <div style={styles.valueIcon}>🌟</div>
            <h4 style={styles.valueTitle}>Holistic Growth</h4>
            <p style={styles.valueDescription}>
              Encouraging exploration of interests and growth into confident, compassionate individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
