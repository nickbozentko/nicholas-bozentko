import React, { useState } from 'react';
import PropTypes from 'prop-types';

 const SkillItem = ({
    children,
    color = 'white'
}) => {
    let [isFocused, setIsFocused] = useState(false);
    return(
        <div
            style={{
                color: isFocused ? '#252729' : color,
                backgroundColor: isFocused ? color : 'transparent',
            }}
            className="skill-item-root"
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
        >
            {children}
        </div>
    );
}

SkillItem.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    color: PropTypes.string
}

export default SkillItem;