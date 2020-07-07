import React, { useState } from 'react';

import './MediaCard.css';

const MediaCard = props => {
    let {
        imgSrc,
        title,
        textContent
    } = props;

    let [isFocused, setIsFocused] = useState(false);

    const handleHover = () => {
        setIsFocused(true);
    };

    const handleUnhover = () => {
        setIsFocused(false);
    };

    return(
        <div 
            className="media-card" 
            style={{ 'margin': '15px', filter: isFocused ? 'blur(3px)' : '' }}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
        >
            <div className="media-card-img-div">
                <img className="media-card-img" src={imgSrc} alt="Image" style={{ width: '100%' }} />
            </div>
         
            <div className="card-text-container">
                <h3>{title}</h3>
                <p>{textContent}</p>
            </div>
        </div>
    );
}

export default MediaCard;