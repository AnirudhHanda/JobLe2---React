import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import JobListings from './components/JobListings';
import JobPostForm from './components/JobPostForm';
import SuccessPage from './components/SuccessPage';
import ContactPage from './components/ContactPage';
import EditJobForm from "./components/EditJobForm";


function App() {
  return (
      <Router>
        <Navbar /> {/* Navbar is outside the Routes to be on all pages */}
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/view-all-jobs" element={<JobListings />} />
            <Route path="/add-job" element={<JobPostForm />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/edit-job" element={<EditJobForm />} />
        </Routes>
      </Router>
  );
}

export default App;