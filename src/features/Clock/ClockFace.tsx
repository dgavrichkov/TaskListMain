import { Markers } from './ui';
import { offsets } from './utils';

const WIDTH = 230;
const HEIGHT = 220;

const ClockFace = ({ time }: { time: string }) => {
  const hms = time.split(':');
  const h = parseInt(hms[0]);
  const m = parseInt(hms[1]);
  const s = hms.length > 2 ? parseInt(hms[2]) : 0;
  const [hoursX, hoursY] = offsets(30 * (h + m / 60 + s / 3600), 50);
  const [minutesX, minutesY] = offsets(6 * (m + s / 60), 85);
  const [secondsX, secondsY] = offsets(6 * parseInt(hms[2]), 20);

  const fiveMinutes = new Array(12).fill(0).map((m, i) => {
    const label = offsets(i * 30, 70);

    return (
      <text
        fill="#c7d4f4"
        key={i}
        stroke="#c7d4f4"
        style={{ fontSize: '11px', fontWeight: 'bold' }}
        textAnchor="middle"
        transform={`translate(${WIDTH / 2 + label[0]},${HEIGHT / 2 - label[1] - 11})`}
        x="0"
        y="15"
      >
        {i === 0 ? '12' : i < 10 ? '0' + i : i}
      </text>
    );
  });

  function arm(x: number, y: number, xs: number, ys: number) {
    return (
      <>
        <line
          stroke="red"
          strokeLinecap="round"
          strokeWidth={2}
          x1={WIDTH / 2}
          x2={WIDTH / 2 + x}
          y1={HEIGHT / 2}
          y2={HEIGHT / 2 - y}
        />
        <line
          stroke="red"
          strokeLinecap="round"
          strokeWidth={7}
          x1={WIDTH / 2 + xs}
          x2={WIDTH / 2 + x}
          y1={HEIGHT / 2 - ys}
          y2={HEIGHT / 2 - y}
        />
        <line
          stroke="#b20000"
          strokeLinecap="round"
          strokeWidth={4}
          x1={WIDTH / 2 + xs}
          x2={WIDTH / 2 + x}
          y1={HEIGHT / 2 - ys}
          y2={HEIGHT / 2 - y}
        />
      </>
    );
  }

  const minuteArm = arm(minutesX, minutesY, minutesX / 7, minutesY / 7);

  const hourArm = arm(hoursX, hoursY, hoursX / 4, hoursY / 4);

  const secondsArm = (
    <line
      fill="#bc0507"
      stroke="#e5321e"
      strokeLinecap="round"
      strokeWidth={4}
      x1={WIDTH / 2 - secondsX / 4}
      x2={WIDTH / 2 + secondsX}
      y1={HEIGHT / 2 + 35 + secondsY / 4}
      y2={HEIGHT / 2 + 35 - secondsY}
    />
  );

  return (
    <svg
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      width={WIDTH}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Markers color="#4c507d" innerRadius={85} intervals={60} outerRadius={95} strokeWidth={2} />
      <Markers color="#cfddfa" innerRadius={85} intervals={12} outerRadius={95} strokeWidth={7} />
      {fiveMinutes}
      {hms[2] ? (
        <>
          <Markers
            centerX={WIDTH / 2}
            centerY={145}
            color="#4c507d"
            innerRadius={20}
            intervals={12}
            outerRadius={25}
          />
          {secondsArm}
          <circle
            cx={WIDTH / 2}
            cy={HEIGHT / 2 + 35}
            fill="#bc0507"
            r="3.5"
            stroke="#e5321e"
            strokeWidth="1"
          />
        </>
      ) : null}
      {hourArm}
      {minuteArm}
      <circle cx={WIDTH / 2} cy={HEIGHT / 2} fill="#b20000" r="3.5" stroke="red" strokeWidth="2" />
    </svg>
  );
};

export default ClockFace;
