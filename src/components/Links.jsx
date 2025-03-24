import React from 'react';

import Linkedin from './icons/Linkedin';
import GitHub from './icons/GitHub';

const linkedinLink = "https://linkedin.com/in/nicholas-bozentko";
const githubLink = "https://github.com/nickbozentko";

const Links = () => {
    return(
        <div className="links-root">
            <a className="link" href={linkedinLink} rel="noreferrer" target="_blank">
                <Linkedin width={30} height={30} style={{ fill: 'white' }} className="icon" />
            </a>
            <a className="link" href={githubLink} rel="noreferrer" target="_blank">
                <GitHub width={30} height={30} style={{ fill: 'white' }} className="icon" />
            </a>
        </div>
    );
}

export default Links;
