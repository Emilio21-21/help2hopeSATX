import React from 'react';

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1.1rem',
  border: 'none',
  borderRadius: '10px',
  backgroundColor: '#3498db',
  color: '#fff',
  cursor: 'pointer',
  transition: '0.3s',
  margin: '0.5rem 0',
};

function HomePage() {
  return (
    <div className="app-container" style={{ textAlign: 'center', padding: '2rem' }}>
      <header>
        <h1 style={{ fontSize: '2.5rem', color: '#2c3e50' }}>Help2Hope SATX</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Connecting volunteers with those in need across San Antonio — fast, free, and compassionate.
        </p>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '2rem auto' }}>
        <button style={buttonStyle} onClick={() => window.location.href = '/request-help'}>
          Request Help
        </button>
        <button style={buttonStyle} onClick={() => alert('Volunteer form coming soon!')}>
          Become a Volunteer
        </button>
      </main>

      <footer style={{ fontSize: '0.9rem', color: '#888', marginTop: '3rem' }}>
        &copy; {new Date().getFullYear()} Help2Hope SATX — Built for the community
      </footer>
    </div>
  );
}

export default HomePage;
