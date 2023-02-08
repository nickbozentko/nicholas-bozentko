import { useState, useEffect } from 'react';

function useWindowSize() {
    const [width, setWidth] = useState(undefined);
    const [height, setHeight] = useState(undefined);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        } 
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return { width, height };
}

export default useWindowSize;
