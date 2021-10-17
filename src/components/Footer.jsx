import React from 'react';

const sourceRepoLink = "https://github.com/nickbozentko/nicholas-bozentko";

const Footer = () => (
    <div className="footer-root">
        <span>
            Nicholas Bozentko | 
            <a 
                href={sourceRepoLink}
                rel="noreferrer"
                target="_blank"
            >{' Source'}
            </a>
        </span>
    </div>
);

export default Footer;