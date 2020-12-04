
import React, { useState, useEffect } from 'react';
import './Typing.css';

const TypedIntro = () => {

    const nameString = "Hi, I'm Nick."
    const introString = "Here's a little bit about me."

    let [nameText, setNameText] = useState('');
    let [introText, setIntroText] = useState('');

    const writeNameString = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            iteration++;
            let newNameText = nameString.substring(0, iteration);
            setNameText(newNameText);
            if(iteration > nameString.length) {
                writeIntroString()
                clearInterval(interval);
            }
        }, 100);
    }

    const writeIntroString = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            iteration++;
            let newIntroText = introString.substring(0, iteration);

            setTimeout(() => {
                setIntroText(newIntroText);
            }, 750)
                
            if(iteration > introString.length) {
                clearInterval(interval);
            }
        }, 60);
    }

    useEffect(() => {
        setTimeout(() => {
            writeNameString()
        }, 250)
    }, []);

    return(
    <div>
        <span
            style={{ 
                fontSize: '45px'
            }}
            className="blinkingCursorName"
        >
            {nameText}
        </span>
        <br/>
        <span 
            style={{ 
                fontSize: '20px', 
                color: 'gray',
            }}
            className="blinkingCursorIntro"
        > 
            {introText}
        </span>
    </div>
    )
}

export default TypedIntro;