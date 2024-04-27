import { useEffect, useRef } from "react";

export const useClickOutside2 = (callback) => {
    const ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [ref]);
    return ref;
};
