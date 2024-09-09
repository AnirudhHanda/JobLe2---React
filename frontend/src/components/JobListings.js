import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation links

const JobListings = () => {
    const [jobs, setJobs] = useState([]); // State to store fetched jobs

    useEffect(() => {
        // Fetch job data from backend API (replace with your actual API endpoint)
        fetch('http://localhost:8080/jobPosts')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-4 text-2xl text-white" style={{ marginTop: '28px' }}>All Available Jobs</h1>

            <div className="job-cards-container">
                {jobs.map(job => (
                    <div key={job.postId} className="job-card bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-xl font-bold mb-2 text-white">{job.postProfile}</h2>
                        <p className="text-gray-300 mb-4">{job.postDesc}</p>

                        <div className="flex justify-between items-center text-sm text-gray-400">
                            <div>
                                <span className="font-semibold">Experience:</span> {job.reqExperience} years
                            </div>
                            <div>
                                <span className="font-semibold">Tech Stack:</span> {job.techStack.join(', ')} {/* Assuming techStack is an array */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobListings;