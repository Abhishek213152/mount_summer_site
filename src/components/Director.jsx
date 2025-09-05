// components/Director.jsx

import alumni1 from '../assets/alumni3.jpg'; // Replace with actual director image if different

const Director = () => {
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
        <h1 style={styles.headerTitle}>Director's Message</h1>
        <div style={styles.headerDivider}></div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Director Info */}
        <div style={styles.principalInfo}>
          <div style={styles.principalFlex}>
            <div style={styles.photoContainer}>
              <img src={alumni1} alt="Director" style={styles.photo} />
            </div>
            <div style={styles.principalDetails}>
              <h2 style={styles.principalName}>Mr. Raghavendra Kumar</h2>
              <p style={styles.principalTitle}>Director, Mount Summer Convent School</p>
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
            <h2 style={styles.welcomeTitle}>A Message from the Director</h2>
            <p style={styles.welcomeSubtitle}>Empowering Values. Shaping Futures.</p>
          </div>

          <div style={styles.messageContent}>
            {[
              "Mount Summer Convent School stands as a beacon of quality education, strong moral values, and holistic development. Rooted in a commitment to nurture young minds with compassion, discipline, and vision, our institution goes beyond conventional learning to shape responsible global citizens.",
              "Our vision is not only to impart academic excellence but also to instill in every student a sense of purpose, resilience, and integrity that guides them throughout life.",
              "We believe that true education lies in empowering students with the right blend of knowledge, critical thinking, emotional intelligence, and ethical grounding. At Mount Summer Convent School, learning is an inspiring journey enriched by innovative teaching methods, cutting-edge infrastructure, and a team of passionate educators dedicated to every child's success.",
              "Our modern campus provides a safe and stimulating environment where creativity is encouraged, talents are discovered, and leadership is nurtured. From science labs and smart classrooms to arts, sports, and cultural programs, we offer a wide range of opportunities for students to explore, express, and evolve.",
              "We foster a culture of inclusion, respect, and curiosity, where students not only strive for personal excellence but also learn to serve and uplift others. As partners in their growth, we engage with families and the wider community to build a support system that champions lifelong learning.",
              "At Mount Summer Convent School, we are not just preparing students for exams—we are preparing them for life. Together, we are shaping a future that is bright, courageous, and driven by values that endure."
            ].map((para, idx) => (
              <p key={idx} style={styles.messageParagraph}>{para}</p>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <div style={styles.closingSection}>
          <h3 style={styles.closingTitle}>
            True education builds character, vision, and the courage to make a difference.
          </h3>
          <p style={styles.closingSubtitle}>
            Mount Summer Convent School: Shaping a generation with wisdom, purpose, and strength.
          </p>
        </div>

        {/* Values Section */}
        <div style={styles.valuesGrid}>
          <div style={styles.valueCard}>
            <div style={styles.valueIcon}>📚</div>
            <h4 style={styles.valueTitle}>Knowledge with Values</h4>
            <p style={styles.valueDescription}>
              Bridging academic brilliance with ethical understanding and emotional wisdom.
            </p>
          </div>
          <div style={styles.valueCard}>
            <div style={styles.valueIcon}>🌱</div>
            <h4 style={styles.valueTitle}>Holistic Nurturing</h4>
            <p style={styles.valueDescription}>
              Cultivating minds and hearts through academics, arts, sports, and community engagement.
            </p>
          </div>
          <div style={styles.valueCard}>
            <div style={styles.valueIcon}>🌏</div>
            <h4 style={styles.valueTitle}>Global Readiness</h4>
            <p style={styles.valueDescription}>
              Preparing students to become responsible citizens and future-ready leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
