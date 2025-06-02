// hooks/useCountUp.ts
import { useEffect, useMemo, useState, useCallback } from "react";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  start?: number;
}

export const useCountUp = ({
  target,
  duration = 2000,
  start = 10,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);

  const frameRate = 48;

  const increment = useMemo(() => {
    return Math.ceil(target / (duration / frameRate));
  }, [target, duration]);

  const updateCount = useCallback(() => {
    setCount((prev) => {
      const next = prev + increment;
      if (next >= target) {
        return target;
      }
      return next;
    });
  }, [increment, target]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateCount();
    }, frameRate);

    return () => clearInterval(interval);
  }, [updateCount]);

  return count;
};
