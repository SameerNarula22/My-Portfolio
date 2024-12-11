import React, { useState } from 'react';
import SudokuG from '../Assets/Sudoku.jpeg';
import TextUtilss from '../Assets/TextUtils2.png';
import WeatherAPP from '../Assets/weather2.png';
const projects = [
    {
        id: 1,
        title: 'Sudoku Game',
        name: 'AI-Powered Task Manager',
        githubUrl: 'https://sameernarula22.github.io/SudokuGame/',
        imageUrl: SudokuG,
    },
    {
        id: 2,
        title: 'Text-Utils',
        name: 'Any Text Converter',
        githubUrl: 'https://github.com/SameerNarula22/TextUtils',
        imageUrl: TextUtilss,
    },
    {
        id: 3,
        title: 'Weather App',
        name: 'check any city weather',
        githubUrl: 'https://sameernarula22.github.io/WeatherApp/',
        imageUrl: WeatherAPP,
    },
];

export default function ProjectsShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
        );
    };

    const currentProject = projects[currentIndex];

    const styles = {
        section: { padding: '48px 0', backgroundColor: '#71797E' },
        container: { maxWidth: '768px', margin: '0 auto', textAlign: 'center' },
        heading: {
            marginBottom: '60px',
            fontFamily: "'Protest Revolution', sans-serif",
            fontSize: '60px',
            paddingTop:'50px'
        },
        projectContainer: {
            backgroundColor: '#C0C0C0',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '650px',
            height: '400px',
            margin: '0 auto',
        },
        button: {
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '24px',
        },
        projectInfo: { textAlign: 'center' },
        projectImage: {
            width: '180px',
            height: '180px',
            marginBottom: '16px',
            borderRadius: '8px',
            mixBlendMode: 'multiply',
        },
        projectTitle: { fontSize: '24px', fontWeight: 'bold' },
        projectName: { fontSize: '16px', color: '#6b7280', marginBottom: '16px' },
        learnMoreButton: {
            padding: '8px 16px',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '4px',
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>My Projects</h2>
                <div style={styles.projectContainer}>
                    <button
                        onClick={prevProject}
                        style={styles.button}
                        aria-label='Previous'>
                        ◀
                    </button>
                    <div style={styles.projectInfo}>
                        <img
                            src={currentProject.imageUrl}
                            alt={`${currentProject.title} Thumbnail`}
                            style={styles.projectImage}
                        />
                        <h3 style={styles.projectTitle}>{currentProject.title}</h3>
                        <p style={styles.projectName}>{currentProject.name}</p>
                        <a
                            href={currentProject.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            style={styles.learnMoreButton}>
                            Learn More
                        </a>
                    </div>
                    <button onClick={nextProject} style={styles.button} aria-label='Next'>
                        ▶
                    </button>
                </div>
            </div>
        </section>
    );
}
