import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: FaHtml5, proficiency: 90 },
    { name: 'CSS', icon: FaCss3Alt, proficiency: 85 },
    { name: 'JavaScript', icon: FaJsSquare, proficiency: 80 },
    { name: 'Java', icon: FaJava, proficiency: 85 },
    { name: 'SQL', icon: FaDatabase, proficiency: 75 },
    { name: 'React', icon: FaReact, proficiency: 100 },
    { name: 'Node.js', icon: FaNodeJs, proficiency: 70 },
    { name: 'Python', icon: FaPython, proficiency: 75 },
    { name: 'Git', icon: FaGitAlt, proficiency: 85 },
    { name: 'Docker', icon: FaDocker, proficiency: 65 },
    { name: 'VS Code', icon: SiVisualstudiocode, proficiency: 95 },
    { name: 'AWS', icon: FaAws, proficiency: 70 },
  ];

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      paddingTop: '80px',
      padding: '200px',
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#71797E',
      marginRight: '0',
    },
    heading: {
      textAlign: 'center',
      fontFamily: "'Protest Revolution', sans-serif",
      fontSize: '60px',
      textShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
      backgroundColor: '#71797E',
      padding: '0',
      paddingTop: '150px',
      margin: '0',
    },
    skillItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100px',
    },
    iconWrapper: {
      position: 'relative',
      width: '80px',
      height: '80px',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
    },
    skillName: {
      marginTop: '10px',
      textAlign: 'center',
      fontSize: '14px',
    },
    proficiency: {
      fontSize: '12px',
      color: '#2f4347',

    },
  };

  return (
    <div>
      <h1 style={styles.heading}>My Skills</h1>
      <div style={styles.container}>
        <IconContext.Provider value={{ size: '40px' }}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillItem}>
              <div style={styles.iconWrapper}>
                <div style={styles.icon}>
                  <skill.icon />
                </div>
                <svg width="80" height="80">
                  <circle
                    cx="40"
                    cy="40"
                    r="38"
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="4"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="38"
                    fill="none"
                    stroke="#007bff"
                    strokeWidth="4"
                    strokeDasharray={`${(2 * Math.PI * 38 * skill.proficiency) / 100} ${2 * Math.PI * 38}`}
                    strokeDashoffset={-Math.PI * 38 * 0.5} // Start from 12 o'clock position
                    transform="rotate(-90 40 40)" // Rotate to start from the top
                  />
                </svg>
              </div>
              <div style={styles.skillName}>
                {skill.name} <span style={styles.proficiency}>({skill.proficiency}%)</span>
              </div>
            </div>
          ))}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Skills;
