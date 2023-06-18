import React, { useState, useEffect } from 'react';

const Hero = () => {
    const nameStr = "Hi, I'm Nick";
    const introStr = "Here's a little bit about me";
    const cursorStates = {
        hide: 'hide-cursor',
        solid: 'solid-cursor',
        blink: 'blink-cursor'
    }

    let [nameText, setNameText] = useState('');
    let [introText, setIntroText] = useState('');
    let [nameCursorState, setNameCursurState] = useState(cursorStates.blink);
    let [introCursorState, setIntroCursurState] = useState(cursorStates.hide);

    const animateText = () => {
        let timeToStartTyping = 750; // milliseconds
        let timeBetweenLines = 2000; // milliseconds
        
        setTimeout(async () => {
            setNameCursurState(cursorStates.solid);
            await writeStringOverTime(nameStr, 100, setNameText);
            setNameCursurState(cursorStates.blink);
            setTimeout(async () => {
                setNameCursurState(cursorStates.hide);
                setIntroCursurState(cursorStates.solid);
                await writeStringOverTime(introStr, 60, setIntroText);
                setIntroCursurState(cursorStates.blink);
                setTimeout(() => {
                    setIntroCursurState(cursorStates.hide);
                }, timeBetweenLines)
            }, timeBetweenLines);
        }, timeToStartTyping)
    }

    useEffect(() => {
        animateText();
    }, []);

    const particles = [];
    for(let i = 0; i < 40; i++) {
        particles.push(
            <span className="particle" key={i}></span>
        )
    }

    return (<>
        <div className="hero-root">
            {particles}
            <div className="hero-box">
                <div className="intro-text-parent">
                    <div className={`intro-text-1 ${nameCursorState}`}>
                        {nameText}
                    </div>
                    <span className="flex-wrapper">
                        <div className={`intro-text-2 ${introCursorState}`}>
                            {introText}
                        </div>
                    </span>
                </div>
                <img src="/logo.svg" className="logo" />
            </div>
        </div>
    </>);
};

export default Hero;

/**
 * @param {string} str 
 * @param {number} timeDelta 
 * @param {(string) => void} setNewStateFunc 
 * @returns {Promise<void>} 
 */
const writeStringOverTime = (str, timeDelta, setNewStateFunc) => {
    return new Promise(resolve => {
        let iteration = 0;
        let interval = setInterval(() => {
            iteration++;
            let newNameText = str.substring(0, iteration);
            setNewStateFunc(newNameText);
            if (iteration > str.length) { 
                clearInterval(interval); // Clean up interval
                resolve();
            } 
        }, timeDelta)
    })
}