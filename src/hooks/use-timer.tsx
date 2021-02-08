import { useState, useEffect, useMemo, useCallback , useRef } from 'react';
import { getHalf } from '../utils/math-tool';

export const useTimer = (limit: number): [number, number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const half: number = useMemo(() => getHalf(limit),[limit])
  const timerId = useRef<NodeJS.Timeout>();
  const reset = () => useCallback(() => setTimeLeft(limit),[limit]);
  const tick = () => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const clearTimer = () => {
      if (timerId.current) clearInterval(timerId.current);
    }
    reset();
    clearTimer();
    timerId.current = setInterval(tick,1000);
    return clearTimer;
  }, [limit, reset]);

  useEffect(() => {
    if (timeLeft === 0) reset();
  },[timeLeft, reset]);

  return [timeLeft, half, reset];

}