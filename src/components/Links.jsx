import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import useWindowSize from '../hooks/useWindowSize';

const linkedinLink = "https://linkedin.com/in/nicholas-bozentko";
const githubLink = "https://github.com/nickbozentko";
const twitterLink = "https://twitter.com/nickbozdev";
const blogLink = "https://blog.nickboz.dev";

const Links = () => {
    const { width } = useWindowSize();
    const iconSize = width > 933 ? '3x' : '2x';

    return(
        <div className="links-root">
            <a className="link" href={linkedinLink} rel="noreferrer" target="_blank">
                <div className="icon" href="" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size={iconSize} />
                </div>
            </a>
            <a className="link" href={githubLink} rel="noreferrer" target="_blank">
                <div className="icon" href="" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size={iconSize} />
                </div>
            </a>
            <a className="link" href={twitterLink} rel="noreferrer" target="_blank">
                <div className="icon" href="" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} size={iconSize} />
                </div>
            </a>
            <a className="link" href={blogLink} rel="noreferrer" target="_blank">
                <div className="icon" href="" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faBook} size={iconSize} />
                </div>
            </a>
        </div>
    );
}

export default Links;
