import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Education() {
	const styles = {
		section: {
			padding: '48px 0',
			backgroundColor: '#71797E',
		},
		container: {
			maxWidth: '768px',
			margin: '0 auto',
			padding: '0 16px',
			paddingTop:'50px'
		},
		heading: {
			marginBottom: '60px',
			textAlign: 'center',
			backgroundColor: '#71797E',
			fontFamily: "'Protest Revolution', sans-serif",
			fontSize: '60px',
			textShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
			paddingBottom:'30px'
		
		},
		timeline: {
			position: 'relative',
		},
		verticalLine: {
			position: 'absolute',
			left: '50%',
			transform: 'translateX(-50%)',
			width: '2px',
			height: '100%',
			backgroundColor: '#e5e7eb',
		},
		timelineItem: (index) => ({
			display: 'flex',
			justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
			alignItems: 'center',
			marginBottom: '32px',
			width: '100%',
			position: 'relative',
		}),
		timelineContent: (index) => ({
			width: '40%',
			backgroundColor: '#C0C0C0',
			borderRadius: '8px',
			boxShadow:
				'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			padding: '16px 24px',
			textAlign: 'center',
		}),
		timelineMarker: {
			position: 'absolute',
			left: '50%',
			transform: 'translateX(-50%)',
			width: '32px',
			height: '32px',
			backgroundColor: '#1f2937',
			color: 'white',
			borderRadius: '50%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			zIndex: 10,
		},
		contentTitle: {
			marginBottom: '12px',
			fontWeight: 'bold',
			color: '#1f2937',
			fontSize: '20px',
		},
		contentText: {
			fontSize: '14px',
			lineHeight: '2',
			color: '#374151',
		},
		contentYear: {
			fontSize: '14px',
			color: '#6b7280',
		},
		contentDescription: {
			fontSize: '14px',
			color: '#4b5563',
			marginTop: '8px',
		},
	};

	const educationData = [
		{
			id: 1,
			title: 'Bachelor`s of Engineering',
			institution: 'Chitkara University',
			year: '2019 - 2023',
			description: 'CGPA : 9.45',
		},
		{
			id: 2,
			title: 'Senior Secondary School',
			institution: 'New G.M.T Public School',
			year: '2018 - 2019',
			description: 'Science Stream',
		},
	];

	return (
		<section style={styles.section}>
			<div style={styles.container}>
				<h1 style={styles.heading}>My Educational Journey </h1>
				<div style={styles.timeline}>
					<div style={styles.verticalLine}></div>
					{educationData.map((item, index) => (
						<div key={item.id} style={styles.timelineItem(index)}>
							<div style={styles.timelineMarker}>
								<span style={styles.markerText}>{item.id}</span>
							</div>
							<div style={styles.timelineContent(index)}>
								<h3 style={styles.contentTitle}>{item.title}</h3>
								<p style={styles.contentText}>
									<i className='bi bi-book' style={styles.icon}></i>
									{item.institution}
								</p>
								<p style={styles.contentYear}>{item.year}</p>
								<p style={styles.contentDescription}>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
