import React from 'react';

const SkillItem = props => {
    let { 
        children,
        color
    } = props;
    color = color ? color : 'black';

    return(
        <div
            style={{
                border: `2px solid ${color}`,
                color: color,
                display: 'inline-block',
                borderRadius: '5px',
                padding: '2px 5px 2px 5px',
                margin: '8px',
                backgroundColor: 'white',
                cursor: 'default'
            }}
        >
            {children}
        </div>
    )
}

export default SkillItem;