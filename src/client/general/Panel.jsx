import React from 'react';

const Panel = props => {
    return(
        <div 
            className="panel"
            style={{
                boxShadow: '0px 3px 7px #AAAAAA',
                padding: '10px 20px 10px 20px',
                margin: '25px 10px 25px 10px',
                overflowWrap: 'normal',
                ...props.style,
            }}
            className={`${props.className} panel`}
        >
            {props.children}
        </div>
    )
}

export default Panel;