import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#ffffff' : '#333333'; 
    document.body.style.color = isDarkMode ? '#000000' : '#ffffff';
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.logo}>Sameer Narula</div>

        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="home" smooth={true} duration={500} activeClass="active" offset={-70} style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="about" smooth={true} duration={100} style={styles.navLink}>
              About
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="experience" smooth={true} duration={100} style={styles.navLink}>
              Experience
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="education" smooth={true} duration={100} style={styles.navLink}>
              Education
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="skills" smooth={true} duration={100} style={styles.navLink}>
              Skills
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="projects" smooth={true} duration={100} style={styles.navLink}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>

    
      <button onClick={toggleTheme} style={styles.toggleButton}>
        {isDarkMode ? <FaMoon style={styles.icon} /> : <FaSun style={styles.icon} />}
      </button>
    </div>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '68px',
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    zIndex: 1000,
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  logo: {
    color: '#BB8588',
    fontSize: '40px',
    fontWeight: 'bold',
    fontFamily: "'DynaPuff', cursive",
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    marginRight: '20px',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#BB8588',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: "'DynaPuff', cursive",
    cursor: 'pointer',
  },
  active: {
    borderBottom: '2px solid #BB8588',
    paddingBottom: '4px',
    transition: 'border-bottom 0.3s ease',
  },
  toggleButton: {
    position: 'fixed',
   top: '100px', 
    right: '80px',  
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#BB8588',
    color: '#fff',
    border: 'none',
    borderRadius: '50px', 
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  icon: {
    fontSize: '20px',
  },
};
