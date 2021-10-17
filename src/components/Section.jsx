import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

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

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    icon: PropTypes.object,
    iconColor: PropTypes.string,
    className: PropTypes.string
};

export default Section;