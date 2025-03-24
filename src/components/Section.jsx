import React from 'react';

const Section = ({ 
    title, 
    children, 
    icon,
    iconColor,
    className 
}) => (
    <div className="section">
        <div className="title">{title}</div>
        <div className={`inner ${className}`}>
            <span 
                className="section-icon" 
                style={{ color: iconColor || '#2a9fd1', border: 'none' }}
            >
                <FontAwesomeIcon icon={icon || faSmile} size="2x" />
            </span>
            {children}
        </div>
    </div>
);

export default Section;