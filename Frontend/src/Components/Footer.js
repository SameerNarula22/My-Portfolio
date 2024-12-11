import React from 'react';

export default function Footer() {
    const styles = {
        footer: {
            borderTop: '1px solid #e5e7eb',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#333',
        },
        text: {
            fontSize: '24px',
            color: '#6b7280',
        },
        icon: {
            marginRight: '8px',
        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.text}>
                <i className='bi bi-geo-alt' style={styles.icon}></i>India
            </div>
            <div style={styles.text}>sameernarula22@gmail.com</div>
        </footer>
    );
}