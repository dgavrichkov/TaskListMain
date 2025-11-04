import useClock from './useClock';
import ClockFace from './ClockFace';

import './ticker.css';

export const SimpleTicker = () => {
  // хук принимает формат времени и возвращает само время, которое передается циферблату
  const time = useClock('HH:mm:ss');

  return (
    <div className="Ticker-clock">
      <ClockFace time={time} />
      <div className="flex justify-center">{time}</div>
    </div>
  );
};
