import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{marginTop: '-5px', boxShadow: '0 0px 14px #7ed957'}}>
            <div className="container">
                <Link to="/home" className="logo">
                    <img
                        src="/image/logo3.png"
                        id="logo1"
                        className="logo1"
                        alt="JobLe2 Logo"
                        style={{ height: '60px', width: 'auto', paddingTop: '10px', marginTop: '8px', transition: '1.5s ease' }}
                        onMouseOver={e => e.currentTarget.style.transform = 'rotate(360deg)'}
                        onMouseOut={e => e.currentTarget.style.transform = ''}
                    />
                    <img
                        src="/image/logo3text.png"
                        id="logo2"
                        className="logo2"
                        alt="JobLe2 Logo"
                        style={{ height: '100px', width: 'auto', marginLeft: '-8px', marginTop: '-12px' }}
                    />
                </Link>

                <ul>
                    <li><Link to="/home" className="text-white hover:text-green-500">Home</Link></li>
                    <li><Link to="/view-all-jobs" className="text-white hover:text-green-500">View All Jobs</Link></li>
                    <li><a href="https://anirudhhanda.github.io/Portfolio/" className="text-white hover:text-green-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;