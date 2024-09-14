import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const JobListings = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/jobPosts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setJobs(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    const handleEdit = (job) => {
        navigate('/edit-job', { state: { job } });
    };

    const handleDelete = async (jobId) => {
        if (window.confirm('Are you sure you want to delete this job?')) {
            try {
                const response = await fetch(`http://localhost:8080/jobPost/${jobId}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    setJobs(jobs.filter(job => job.postId !== jobId));
                } else {
                    console.error('Error deleting job:', response.statusText);
                }
            } catch (error) {
                console.error('Error deleting job:', error);
            }
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
                                <span className="font-semibold">Tech Stack:</span> {job.techStack.join(', ')}
                            </div>
                        </div>

                        {/* Edit and Delete buttons */}
                        <div className="ubuttons flex justify-end mt-4">
                            <button
                                onClick={() => handleEdit(job)}
                                className="ubutton1 font-bold py-1 px-2 rounded mr-2 flex items-center" // Added flex and items-center
                            >
                                <FontAwesomeIcon icon={faEdit} className="mr-2" /> {/* Edit icon */}

                            </button>
                            <button
                                onClick={() => handleDelete(job.postId)}
                                className="ubutton2 font-bold py-1 px-2 rounded flex items-center" // Added flex and items-center
                            >
                                <FontAwesomeIcon icon={faTrash} className="mr-2" /> {/* Delete icon */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobListings;