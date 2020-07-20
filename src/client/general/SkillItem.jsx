import React, { useState } from 'react';

const SkillItem = props => {
    let { 
        children,
        color
    } = props;
    color = color ? color : 'black';

    let [isFocused, setIsFocused] = useState(false);

    return(
        <div
            style={{
                border: `2px solid ${color}`,
                color: isFocused ? 'white' : color,
                backgroundColor: isFocused ? color : 'transparent',
                display: 'inline-block',
                borderRadius: '5px',
                padding: '2px 5px 2px 5px',
                margin: '8px',
                cursor: 'default',
                transition: '0.1s'
            }}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
        >
            {children}
        </div>
    )
}

export default SkillItem;