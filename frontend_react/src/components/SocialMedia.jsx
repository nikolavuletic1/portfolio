// SocialMedia.js

import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
// import './SocialMedia.scss'; // Import the stylesheet for SocialMedia
import '../../src/App.scss'

const SocialMedia = ({ className }) => {
    return (
        <div className={`app__social ${className}`}>
            <div className='flex'>
                <a href="https://www.linkedin.com/in/nikola-vuletic-8aa31629b/" target="_blank" rel="noopener noreferrer" aria-label="Nick's LinkedIn">
                    <GrLinkedin />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/nikola.vuletic.77/" target="_blank" rel="noopener noreferrer" aria-label="Nick's Facebook">
                    <BsFacebook />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
