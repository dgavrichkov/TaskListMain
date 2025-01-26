import { Fragment } from 'react/jsx-runtime';
import { offsets } from '../utils';

const WIDTH = 230;

type TMarkersProps = {
  intervals: number;
  innerRadius: number;
  outerRadius: number;
  color: string;
  strokeWidth?: number;
  centerX?: number;
  centerY?: number;
};

export const Markers = ({
  intervals,
  innerRadius,
  outerRadius,
  color,
  strokeWidth,
  centerX = WIDTH / 2,
  centerY = WIDTH / 2,
}: TMarkersProps) => {
  const array = new Array(intervals).fill(0);

  return (
    <>
      {array.map((m, i) => {
        const inner = offsets((i * 360) / intervals, innerRadius);
        const outer = offsets((i * 360) / intervals, outerRadius);

        return (
          <Fragment key={i}>
            <line
              stroke={color}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
              x1={centerX + inner[0]}
              x2={centerX + outer[0]}
              y1={centerY + inner[1]}
              y2={centerY + outer[1]}
            />
          </Fragment>
        );
      })}
    </>
  );
};
