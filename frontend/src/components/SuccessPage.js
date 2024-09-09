import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
    const location = useLocation();
    const newJobId = location.state?.newJobId;
    const [job, setJob] = useState(null);

    useEffect(() => {
        if (newJobId) {
            // Fetch the newly added job using its ID
            fetch(`http://localhost:8080/jobPost/${newJobId}`) // Replace with your actual API endpoint
                .then(response => response.json())
                .then(data => setJob(data))
                .catch(error => console.error('Error fetching job:', error));
        }
    }, [newJobId]);

    return (
        <div className="container">
            <h1 className="text-center my-4 text-2xl text-white">Job Posted Successfully!</h1>

            {job && (
                <div className="job-card bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-xl font-bold mb-2 text-white">{job.postProfile}</h2>
                    <p className="text-gray-300 mb-4">{job.postDesc}</p>

                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <div>
                            <span className="font-semibold">Experience:</span> {job.reqExperience} years
                        </div>
                        <div>
                            <span className="font-semibold">Tech Stack:</span> {job.techStack.join(', ')}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SuccessPage;