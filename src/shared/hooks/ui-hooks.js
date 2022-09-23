import {useState, useEffect, useLayoutEffect} from "react";


export const useWindowSize = () => {
    const [size, setSize] = useState({width: 0, height: 0});


    const updateSize = () => {
        setSize({width: window.innerWidth, height: window.innerHeight});
    };

    useLayoutEffect(() => {
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
};


export const useOutsideAlerter = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target))
                callback?.();
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};