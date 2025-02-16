import {useCallback, useRef} from "react";

const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const debounceCallback = useCallback((...args: Parameters<T>) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);

    return debounceCallback;
};

export default useDebounce;
