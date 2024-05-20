import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const linkedinLink = "https://www.linkedin.com/in/nicholas-bozentko/";
const githubLink = "https://github.com/nickbozentko";
const twitterLink = "https://twitter.com/nickbozdev";

const Nav = () => (
    <nav className="nav-root">
        <div className="nav-name">Nicholas Bozentko</div>
        <div className="nav-links">
            {/* <span>Contact Me</span> */}
            <a className="nav-link" href={linkedinLink} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a className="nav-link" href={githubLink} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
            </a>
        </div>
    </nav>
)

export default Nav;