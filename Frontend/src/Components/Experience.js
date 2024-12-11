import React from 'react';

const Experience = () => {
	const experiences = [
		{
			company: 'Eclerx Pvt. Ltd.',
			position: 'Analyst',
			duration: 'Sep 2023 - Oct 2024',
			location: 'Chandigarh, India',
			description: [
				'• Analyzed data to derive insights and drive business decisions.',
				'• Worked closely with internal teams and clients to ensure accurate data processing and streamlined workflows using ACSR and a CRM designed with Salesforce Admin Portal.',
				'• Ranked top among peers in meeting and exceeding targets, demonstrating exceptional focus and efficiency.',
				'• Managed multiple tasks and deadlines by effectively reallocating priorities and coordinating efforts across the team.',
			],
			technologies: ['ACSR', 'Salesforce Admin Portal'],
		},
		{
			company: 'Zenith Tech Solutions',
			position: 'Project Manager-Intern',
			duration: 'June 2023 - Sept 2023',
			location: 'Panchkula, Haryana',
			description: [
				'• Acted as a bridge between clients and technical teams, ensuring clear understanding of project goals and deliverables.',
				'• Prepared and maintained documentation to support sales pitches and client onboarding processes, aligning business goals with technical solutions.',
				'• Organized and led client meetings to gather requirements, address concerns, and provide updates on project progress.',
				'• Consistently met project deadlines and delivered solutions that aligned with client requirements and expectations.',
			],
			technologies: ['HubSpot', 'Jira', 'Excel'],
		},
		{
			company: 'Skill Labs',
			position: 'Java and Salesforce Developer',
			duration: 'Feb 2023 - June 2023',
			location: 'Chandigarh, India',
			description: [
				'• Technologies: Salesforce, APEX, Visualforce, Java, JDBC, SQL.',
				'• Managed user profiles, customized page layouts, created reports, and automated processes using Salesforce Workflow Rules, Process Builder, and Validation Rules.',
				'• Developed Java applications for backend processes and utilized JDBC to integrate Salesforce with external databases.',
				'• Streamlined workflows and improved system performance, leading to increased client satisfaction and enhanced user productivity.',
			],
			technologies: ['Java', 'SQL', 'Salesforce', 'Apex', 'VisualForce'],
		},
	];

	const styles = {
		container: {
			maxWidth: '100%',
			margin: '0 auto',
			padding: '20px',
			fontFamily: 'Arial, sans-serif',
			backgroundColor: '#71797E',
		},
		heading: {
			marginBottom: '60px',
			textAlign: 'center',
			fontFamily: "'Protest Revolution', sans-serif",
			fontSize: '60px',
			textShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
		},
		timeline: {
			position: 'relative',
			maxWidth: '1200px',
			margin: '0 auto',
		},
		timelineItem: {
			padding: '10px 40px',
			position: 'relative',
			backgroundColor: 'inherit',
			width: '50%',
		},
		timelineItemContent: {
			padding: '20px 30px',
			backgroundColor: '#C0C0C0',
			position: 'relative',
			borderRadius: '6px',
			boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
		},
		timelineItemLeft: {
			left: '0',
		},
		timelineItemRight: {
			left: '50%',
		},
		timelineDot: {
			width: '20px',
			height: '20px',
			position: 'absolute',
			backgroundColor: '#3498db',
			borderRadius: '50%',
			zIndex: '1',
			top: '15px',
		},
		timelineDotLeft: {
			right: '-10px',
		},
		timelineDotRight: {
			left: '-10px',
		},
		company: {
			fontSize: '30px',
			fontWeight: 'bold',
			color: '#2c3e50',
			marginBottom: '5px',
		},
		position: {
			fontSize: '25px',
			color: '#34495e',
			marginBottom: '5px',
		},
		durationLocation: {
			display: 'flex',
			justifyContent: 'space-between',
			fontSize: '15px',
			color: '#7f8c8d',
			marginBottom: '10px',
		},
		description: {
			fontSize: '0.95em',
			color: '#333',
			lineHeight: '1.6',
			marginBottom: '10px',
		},
		technologies: {
			display: 'flex',
			flexWrap: 'wrap',
			gap: '10px',
			height: '30px',
			textAlign: 'center',
		},
		tech: {
			padding: '3px 8px',
			backgroundColor: '#3498db',
			color: 'white',
			borderRadius: '3px',
			fontSize: '0.8em',
		},
		timelineVerticalLine: {
			content: '""',
			position: 'absolute',
			width: '4px',
			backgroundColor: '#3498db',
			top: '0',
			bottom: '0',
			left: '50%',
			marginLeft: '-2px',
		},
	};

	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>Work Experience</h1>
			<div style={styles.timeline}>
				<div style={styles.timelineVerticalLine}></div>
				{experiences.map((exp, index) => (
					<div
						key={index}
						style={{
							...styles.timelineItem,
							...(index % 2 === 0
								? styles.timelineItemLeft
								: styles.timelineItemRight),
						}}>
						<div style={styles.timelineItemContent}>
							<h3 style={styles.company}>{exp.company}</h3>
							<h4 style={styles.position}>{exp.position}</h4>
							<div style={styles.durationLocation}>
								<span>{exp.duration}</span>
								<span>{exp.location}</span>
							</div>
							<div style={styles.description}>
								{exp.description.map((line, i) => (
									<p key={i}>{line}</p>
								))}
							</div>
							<div style={styles.technologies}>
								{exp.technologies.map((tech, techIndex) => (
									<span key={techIndex} style={styles.tech}>
										{tech}
									</span>
								))}
							</div>
						</div>
						<div
							style={{
								...styles.timelineDot,
								...(index % 2 === 0
									? styles.timelineDotLeft
									: styles.timelineDotRight),
							}}></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
