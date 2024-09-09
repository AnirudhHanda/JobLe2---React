import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <header
            className="hero bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: `url('/image/hero.png')` }}
        >
            <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold mb-4 text-white">Find Your Dream Job</h1>
                <p className="text-gray-300 mb-8">
                    Explore thousands of job opportunities and take the next step in your career.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        to="/view-all-jobs"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        View All Jobs
                    </Link>
                    <Link
                        to="/add-job"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add Job
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HomePage;
