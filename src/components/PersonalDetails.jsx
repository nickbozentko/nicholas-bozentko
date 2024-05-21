import { useEffect, useState } from "react";

const skills = [
    "fullstack development",
    "architecting cloud solutions",
    "automation",
    "brewing espresso",
    "devops & CICD",
]

const PersonalDetails = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setFade(true);
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
            setFade(false);
          }, 500); // This duration should match the transition duration in the CSS
        }, 3000);
    
        return () => clearInterval(interval);
      }, [skills.length]);

    return(
        <div className="personal-details-root">
            <div className="outer-container">
                <div className="container">
                    <div className="box left">Software Developer</div>
                    <div className="box center">&nbsp;@&nbsp;</div>
                    <div className="box right"><span className="ibm">IBM</span></div>
                </div>

                <div className="container">
                    <div className="box left">B.S. in Computer Science</div>
                    <div className="box center">&nbsp;@&nbsp;</div>
                    <div className="box right"><span className="iona">Iona University</span></div>
                </div>

                <div className="container">
                    <div className="box left">Skilled in</div>
                    <div className="box center">&nbsp;...&nbsp;</div>
                    <div className="box right"><span className={`word ${fade ? 'fade' : ''}`}>{skills[currentIndex]}</span></div>
                </div>
            </div>

            <div className="standalone">I am currently enjoying writing Go and learning how to pull the perfect shot of espresso ☕</div>
        </div>
    );
}

export default PersonalDetails;