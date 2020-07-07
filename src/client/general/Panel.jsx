import React from 'react';

const Panel = props => {
    return(
        <div 
            className="panel"
            style={props.style}
            className={`${props.className} panel`}
        >
            {props.children}
        </div>
    )
}

export default Panel;