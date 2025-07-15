import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import RequestForm from './RequestForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request-help" element={<RequestForm />} />
      </Routes>
    </Router>
  );
}

export default App;
