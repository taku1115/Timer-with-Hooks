import React, { FC } from 'react';

type Props = {
  timeLeft?: number;
  half?: number;
  reset?: () => void;
};

const Timer: FC<Props> = ({
  timeLeft = 0,
  half = 0,
  reset = () => undefined,
}) => {
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
};

export default Timer;