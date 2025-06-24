import React from 'react';

const Dashboard = () => {
  // Get user first name from sessionStorage or fallback
  let firstName = '';
  try {
    const user = JSON.parse(sessionStorage.getItem('signupUserData') || '{}');
    firstName = user.firstName || '';
  } catch {
    firstName = '';
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '3rem auto',
      padding: '2rem',
      background: '#fff',
      borderRadius: '1.2rem',
      boxShadow: '0 4px 24px rgba(1,87,76,0.10)',
      textAlign: 'center',
    }}>
      <h2 style={{ fontWeight: 700, color: '#01574C', marginBottom: '0.5rem' }}>
        Hey{firstName ? ` ${firstName}` : ''}, Welcome
      </h2>
      <div style={{
        marginTop: '2.5rem',
        fontSize: '1.25rem',
        color: '#01574C',
        fontWeight: 500,
        letterSpacing: '0.01em',
      }}>
        Your dashboard<br />
        <span style={{ color: '#01bfa5', fontWeight: 600 }}>Still under development</span>
      </div>
    </div>
  );
};

export default Dashboard;
