import {useEffect, useRef, useState} from "react";
import './fadeInSection.scss'

export default function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const [loaded, setLoaded] = useState(false)
    const domRef = useRef();

    let mode = 'fade-in-section'
    if(props.mode === 'opacity'){
        mode = 'fade-in-section opacity'
    }

    useEffect(() => {
        if(isVisible) setLoaded(true)
    }, [isVisible])

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`${mode} ${isVisible || loaded ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}