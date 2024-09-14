import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditJobForm = () => {
    const location = useLocation();
    const { job } = location.state;
    const navigate = useNavigate();

    const [updatedJob, setUpdatedJob] = useState({
        postId: job.postId,
        postProfile: job.postProfile,
        postDesc: job.postDesc,
        reqExperience: job.reqExperience,
        techStack: job.techStack
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'techStack') {
            const options = event.target.options;
            const selectedValues = [];
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    selectedValues.push(options[i].value);
                }
            }
            setUpdatedJob({ ...updatedJob, [name]: selectedValues });
        } else {
            setUpdatedJob({ ...updatedJob, [name]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/jobPost`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedJob)
            });

            if (response.ok) {
                const newJobId = await response.text();

                // Navigate to the Success page with the new job ID
                navigate('/success', { state: { newJobId } });
            } else {
                console.error('Error updating job:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating job:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center my-4 text-2xl text-white">Edit Job</h1>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="postId" className="block text-white text-sm font-bold mb-2">Post ID:</label>
                    <input
                        type="text"
                        id="postId"
                        name="postId"
                        value={updatedJob.postId}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="postProfile" className="block text-white text-sm font-bold mb-2">Post Profile (will be displayed in bold):</label>
                    <input
                        type="text"
                        id="postProfile"
                        name="postProfile"
                        value={updatedJob.postProfile}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="postDescription" className="block text-white text-sm font-bold mb-2">Post Description:</label>
                    <textarea
                        id="postDescription"
                        name="postDesc"
                        value={updatedJob.postDesc}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="requiredExperience" className="block text-white text-sm font-bold mb-2">Required Experience (in years):</label>
                    <input
                        type="number"
                        id="requiredExperience"
                        name="reqExperience"
                        value={updatedJob.reqExperience}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="techStack" className="block text-white text-sm font-bold mb-2">Tech Stack (select multiple):</label>
                    <select
                        id="techStack"
                        name="techStack"
                        multiple
                        value={updatedJob.techStack}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="javascript">JavaScript</option>
                        <option value="c++">C++</option>
                    </select>
                </div>

                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditJobForm;