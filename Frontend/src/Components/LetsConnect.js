import React, { useState } from 'react';

export default function LetsConnect() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		
		const response = await fetch('http://localhost:8080',{
			method:'POST',
			body:JSON.stringify(formData),
			headers:{
				'Content-type':'application/json'
			}
		})
		const data = await response.json();
		console.log(data);
	};

	const styles = {
		section: {
			padding: '48px 0',
			backgroundColor: '#71797E',
		},
		container: {
			maxWidth: '768px',
			margin: '0 auto',
			padding: '0 16px',
		},
		heading: {
			marginBottom: '60px',
			textAlign: 'center',
			backgroundColor: '#71797E',
			fontFamily: "'Protest Revolution', sans-serif",
			fontSize: '60px',
			textShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
			paddingTop:'30px',
		},
		form: {
			backgroundColor: '#C0C0C0',
			borderRadius: '8px',
			boxShadow:
				'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			padding: '24px',
		},
		formGroup: {
			marginBottom: '20px',
		},
		label: {
			display: 'block',
			marginBottom: '5px',
			fontSize: '16px',
			fontWeight: 'bold',
			color: '#374151',
		},
		input: {
			width: '100%',
			padding: '10px',
			fontSize: '16px',
			borderRadius: '4px',
			border: '1px solid #d1d5db',
			backgroundColor: '#71797E',
		},
		textarea: {
			width: '100%',
			padding: '10px',
			fontSize: '16px',
			borderRadius: '4px',
			border: '1px solid #d1d5db',
			minHeight: '120px',
			backgroundColor: '#71797E',
		},
		button: {
			backgroundColor: '#3b82f6',
			color: 'white',
			padding: '12px 24px',
			borderRadius: '4px',
			fontSize: '16px',
			fontWeight: 'bold',
			border: 'none',
			cursor: 'pointer',
			transition: 'background-color 0.3s',
		},
	};

	return (
		<section style={styles.section}>
			<div style={styles.container}>
				<h2 style={styles.heading}>Let's Connect</h2>
				<form onSubmit={handleSubmit} style={styles.form}>
					<div style={styles.formGroup}>
						<label htmlFor='name' style={styles.label}>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							style={styles.input}
						/>
					</div>
					<div style={styles.formGroup}>
						<label htmlFor='email' style={styles.label}>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
							style={styles.input}
						/>
					</div>
					<div style={styles.formGroup}>
						<label htmlFor='message' style={styles.label}>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							required
							style={styles.textarea}
						/>
					</div>
					<button type='submit' style={styles.button}>
						Send
					</button>
				</form>
			</div>
		</section>
	);
}
