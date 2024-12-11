import React from 'react';

const personalInfo = {
  name: 'Sameer Narula',
  age: '23 years',
  phone: '+91-7888588416',
  nationality: 'Indian',
  languages: 'English, Hindi, Punjabi',
  address: 'Ludhiana, Punjab',
};

export default function About() {
  const styles = {
    about1: {
      marginBottom: '0px',
      textAlign: 'center',
      backgroundColor: '#71797E',
      fontFamily: "'Protest Revolution', sans-serif",
      fontSize: '60px',
      textShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
      paddingTop:'100px'
    },
    aboutContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '20px',
      gap: '40px',
      backgroundColor: '#71797E',
      margin: '0',
      paddingBottom:'100px',
    },
    aboutLeft: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    aboutRight: {
      flex: 1,
      padding: '50px',
    },
    // heading: {
    //   fontSize: '2rem',
    //   marginBottom: '20px',
    //   fontWeight: 'bold',
    // },
    infoList: {
      listStyle: 'none',
      padding: 0,
      lineHeight: '1.8',
      margin: '0',
    },
    infoItem: {
      fontSize: '1.2rem',
      marginBottom: '10px',
    },
    infoLabel: {
      fontWeight: 'bold',
      color: '#333',
    },
  };

  return (
    <>
         <h1 style={styles.about1}>About Me</h1>
      <div style={styles.aboutContainer}>
     
        <div style={styles.aboutLeft}>
          <lottie-player
            src="https://lottie.host/caf4e3fa-1544-4bad-94d5-0d83a2a70ecf/unaaWje80S.json"
            background="transparent"
            style={{ width: '200%', height: '200%' }}
            loop
            autoplay
          />
        </div>
        <div style={styles.aboutRight}>
          <h2 style={styles.heading}>Personal Info:</h2>
          <ul style={styles.infoList}>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Name:</span> {personalInfo.name}
            </li>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Age:</span> {personalInfo.age}
            </li>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Phone:</span> {personalInfo.phone}
            </li>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Nationality:</span>{' '}
              {personalInfo.nationality}
            </li>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Languages:</span>{' '}
              {personalInfo.languages}
            </li>
            <li style={styles.infoItem}>
              <span style={styles.infoLabel}>Address:</span>{' '}
              {personalInfo.address}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
