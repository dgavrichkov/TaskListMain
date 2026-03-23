import { Button } from '@/shared/ui';
import { useEffect, useRef, useState } from 'react';

export const IntervalTimerExample = () => {
  const [timerInProgress, setTimerInProgress] = useState<boolean>(false);
  const [count, setCount] = useState(5);
  const timerRef = useRef<any>(null);

  const handleTimerStart = () => {
    setTimerInProgress(true);
    // let counter = count;

    // const cb = () => {
    //   if (counter > 0) {
    //     console.log('OOO', counter);
    //     counter--;
    //     setCount((curr) => curr - 1);
    //   } else {
    //     setTimerInProgress(false);
    //     clearTimeout(timerRef.current);
    //   }
    // };

    // timerRef.current = setInterval(cb, 1000);
  };

  const handleStopTimer = () => {
    clearInterval(timerRef.current);
    setTimerInProgress(false);
    setCount(5);
  };

  useEffect(() => {
    if (!timerInProgress) return;

    const interval = setInterval(() => {
      setCount((counter) => {
        if (counter === 0) {
          setTimerInProgress(false);

          return 0;
        }
        return counter - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [timerInProgress]);

  return (
    <>
      <h2>Timer: {count}</h2>
      <Button disabled={timerInProgress} type="button" onClick={handleTimerStart}>
        Start Timer
      </Button>
      <Button type="button" onClick={handleStopTimer}>
        Reset Timer
      </Button>
    </>
  );
};
