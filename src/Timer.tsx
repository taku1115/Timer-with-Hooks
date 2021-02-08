import React, { FC } from 'react';
import { useTimer } from './hooks/use-timer';

type TimerProps = {
  limit: number;
}

const Timer: FC<TimerProps> = ({ limit }) => {
  const [timeLeft, half, reset] = useTimer(limit);

  return (
    <div>
      <span>
        time
      </span>
      <p>
        { half === timeLeft ? 'half passed !' : ''}
      </p>
      <h1>{timeLeft}</h1>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Timer;