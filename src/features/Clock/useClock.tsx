import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const useClock = (formatOrInterval: any) => {
  const formatString =
    typeof formatOrInterval === 'string' ? formatOrInterval : "yyyy-MM-dd'T'HH:mm:ss.SSS";
  const interval = typeof formatOrInterval === 'number' ? formatOrInterval : 500;
  const [response, setResponse] = useState(format(new Date(), formatString));

  useEffect(() => {
    const newTimer = setInterval(() => {
      setResponse(format(new Date(), formatString));
    }, interval);

    return () => clearInterval(newTimer);
  }, [formatString, interval]);

  return response;
};

export default useClock;
