import React, { useState } from 'react';

import './MediaCard.css';
import './LinkIcon.jsx';
import LinkIcon from './LinkIcon.jsx';

const MediaCard = props => {
    let {
        imgSrc,
        title,
        textContent,
        links
    } = props;

    let [isFocused, setIsFocused] = useState(false);
    const handleHover = () => setIsFocused(true);
    const handleUnhover = () => setIsFocused(false);

    return(
        <div 
            className="outer" 
            style={{ margin: '15px' }}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
        >
            <div 
                className="media-card" 
                style={{ filter: isFocused ? 'blur(4px)' : '' }}
            >
                <div className="media-card-img-div">
                    <img 
                        className="media-card-img" 
                        src={imgSrc} 
                        alt="Image" 
                        style={{ width: '100%' }} 
                    />
                </div>
            
                <div 
                    className="card-text-container"
                    style={{ padding: '15px' }}
                >
                    <h5 style={{ fontFamily: 'Roboto Slab' }}>{title}</h5>
                    <p style={{ fontSize: '16px' }}>{textContent}</p>
                </div>
            </div>

            <div 
                className="middle"
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {links}
            </div>
        </div>
    );
}

export default MediaCard;