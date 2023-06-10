import { useCallback, useRef } from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const isThrottledRef = useRef(false);
  const savedArgsRef = useRef<any[] | null>(null);
  const savedThisRef = useRef<any>();

  return useCallback((...args: any[]) => {
    if (isThrottledRef.current) {
      savedArgsRef.current = args;
      savedThisRef.current = this;
      return;
    }

    isThrottledRef.current = true;
    callback(...args);

    setTimeout(() => {
      isThrottledRef.current = false;

      if (savedArgsRef.current) {
        setTimeout(() => {
          if (!isThrottledRef.current && savedArgsRef.current) {
            callback.apply(savedThisRef.current, savedArgsRef.current);
            savedArgsRef.current = null;
            savedThisRef.current = null;
            isThrottledRef.current = false;
          }
        });
      }
    }, delay);
    // end setTimeout
  }, [callback, delay]);
};
