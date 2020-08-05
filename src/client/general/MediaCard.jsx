import React, { useState } from 'react';

import './MediaCard.css';

const MediaCard = props => {
    let {
        imgSrc,
        title,
        textContent,
        links,
        skills
    } = props;

    let [isFocused, setIsFocused] = useState(false);
    const handleHover = () => setIsFocused(true);
    const handleUnhover = () => setIsFocused(false);

    return(
        <div 
            className="outer" 
            style={{ margin: '15px', borderRadius: '10px' }}
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
                        style={{ width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} 
                    />
                </div>
            
                <div 
                    className="card-text-container"
                    style={{ padding: '15px' }}
                >
                    <h5 style={{ fontFamily: 'Roboto Slab' }}>{title}</h5>

                    <p style={{ fontSize: '16px' }}>{textContent}</p>

                    <hr />

                    <h6 style={{ color: '#A8A8A8', textAlign: 'center' }}>Technologies Used:</h6>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {skills}
                    </div>
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