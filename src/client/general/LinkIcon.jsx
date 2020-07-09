import React, { useState } from 'react';

const LinkIcon = props => {
    let {
        iconName,
        link
    } = props;

    let [isFocused, setIsFocused] = useState(false);
    const handleHover = () => setIsFocused(true);
    const handleUnhover = () => setIsFocused(false);
    
    return(
        <i 
            className={iconName}
            style={{ 
                fontSize: '55px', 
                color: 'white', 
                filter: isFocused ? 'drop-shadow(0px 4px 2px black)' : 'drop-shadow(0px 8px 5px black)', 
                cursor: 'pointer',
                marginBottom: '50px',
                transition: '0.2s'
            }}
            onClick={() => window.open(link, '_blank')}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
        />
    )
}

export default LinkIcon;