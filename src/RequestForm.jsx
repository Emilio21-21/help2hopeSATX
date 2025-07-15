import { useState } from 'react';

function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    need: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Help request submitted! (Next: Send this to Firebase)');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Request Help</h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        type="text"
        name="need"
        placeholder="What do you need help with?"
        value={formData.need}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        type="text"
        name="location"
        placeholder="Your location (ZIP, area, etc.)"
        value={formData.location}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '2rem auto',
  gap: '1rem',
};

const inputStyle = {
  padding: '0.75rem',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '1rem',
  backgroundColor: '#27ae60',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

export default RequestForm;
