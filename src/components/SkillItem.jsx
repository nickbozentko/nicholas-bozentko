import React, { useState } from 'react';

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

export default SkillItem;