import React from 'react';
import ProfilePic from '../Assets/ProfilePic.JPG';
export default function Home() {
	return (
		<section id='home' style={styles.homeSection}>
			<div style={styles.left}>
				<img src={ProfilePic} alt='Your Name' style={styles.image} />
			</div>

		
			<div style={styles.right}>
				
				<h1 style={styles.heading}>
					<span style={styles.typedText}>
						I am Sameer Narula <span style={styles.cursor}>|</span>
					</span>
				</h1>
				<h2 style={styles.subHeading}>Software Developer</h2>
				<div style={styles.buttonContainer}>
					<a
						href='https://linkedin.com/in/sameernarula22'
						target='_blank'
						rel='noopener noreferrer'
						style={styles.iconButton}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 16 16'
							style={styles.icon}>
							<path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z' />
						</svg>
					</a>

					{/* GitHub Icon Button */}
					<a
						href='https://github.com/SameerNarula22'
						target='_blank'
						rel='noopener noreferrer'
						style={styles.iconButton}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 16 16'
							style={styles.icon}>
							<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8' />
						</svg>
					</a>

					<a
						href='https://x.com/sameernarula22'
						target='_blank'
						rel='noopener noreferrer'
						style={styles.iconButton}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 16 16'
							style={styles.icon}>
							<path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

const styles = {
	homeSection: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		backgroundColor: '#71797E',
		padding: '20px',
	},
	left: {
		flex: 1,
		display: 'flex',
		paddingTop: '40px',
		justifyContent: 'left',
		paddingLeft: '10%',
		alignItems: 'center',
	},
	image: {
		width: '50%',
		height: '50%',
		maxWidth: '40%',
		borderRadius: '10px',

		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
	},
	right: {
		flex: 1,
		textAlign: 'center',
	},
	heading: {
		fontSize: '3rem',
		fontWeight: 'bold',
		color: '#333',
		fontFamily: "'Arial', sans-serif",
	},
	typedText: {
		display: 'inline-block',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		width: '0',
		animation: 'typing 3s steps(10) infinite, blink 0.75s step-end infinite',
	},
	cursor: {
		color: 'orange',
		animation: 'blink',
	},
	subHeading: {
		fontSize: '1.5rem',
		color: '#666',
		marginTop: '10px',
		fontFamily: "'Arial', sans-serif",
	},
	buttonContainer: {
		marginTop: '20px',
		display: 'flex',
		justifyContent: 'center',
		gap: '20px',
	},
	iconButton: {
		width: '50px',
		height: '50px',
		backgroundColor: '', // LinkedIn/GitHub background
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		color: '#fff',
		transition: 'background-color 0.3s ease',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
	},
	icon: {
		width: '24px',
		height: '24px',
	},
};

// Add keyframes for typing effect
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
	`
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
`,
	styleSheet.cssRules.length
);

styleSheet.insertRule(
	`
  @keyframes blink {
    50% { border-color: transparent; }
  }
`,
	styleSheet.cssRules.length
);
