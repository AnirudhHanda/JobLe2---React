import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobPostForm = () => {
    const navigate = useNavigate();
    const [jobPost, setJobPost] = useState({
        postId: '',
        postProfile: '',
        postDesc: '',
        reqExperience: 0,
        techStack: []
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
            setJobPost({ ...jobPost, [name]: selectedValues });
        } else {
            setJobPost({ ...jobPost, [name]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/jobPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jobPost)
            });

            if (response.ok) {
                // Assuming your backend returns the ID of the newly created job
                const newJobId = await response.text();

                // Navigate to the Success page with the new job ID
                navigate('/success', { state: { newJobId } });
            } else {
                // Handle error (display an error message to the user)
                console.error('Error posting job:', response.statusText);
            }
        } catch (error) {
            console.error('Error posting job:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center my-4 text-2xl text-white">Post a New Job</h1>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="postId" className="block text-white text-sm font-bold mb-2">Post ID:</label>
                    <input
                        type="text"
                        id="postId"
                        name="postId"
                        value={jobPost.postId}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="postProfile" className="block text-white text-sm font-bold mb-2">Post Profile (will be displayed in bold):</label>
                    <input
                        type="text"
                        id="postProfile"
                        name="postProfile"
                        value={jobPost.postProfile}
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
                        value={jobPost.postDesc}
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
                        value={jobPost.reqExperience}
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
                        value={jobPost.techStack}
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
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobPostForm;