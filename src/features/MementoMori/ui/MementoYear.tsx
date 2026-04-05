import {
  addWeeks,
  differenceInCalendarWeeks,
  differenceInWeeks,
  eachWeekOfInterval,
  endOfWeek,
  endOfYear,
  format,
  isBefore,
  isEqual,
  min,
  startOfDay,
  startOfYear,
} from 'date-fns';
import { MementoSquare } from './MementoSquare';

type Props = {
  year: number;
};

export const MementoYear = ({ year }: Props) => {
  const currentDate = new Date();
  const yearDate = new Date(year, 0, 1);

  const start = startOfYear(yearDate);
  const end = endOfYear(yearDate);
  const diff = differenceInWeeks(end, start);
  const weeksBeforeToday = differenceInCalendarWeeks(currentDate, start);

  const weekStarts = eachWeekOfInterval({ start, end }, { weekStartsOn: 1 });

  const weeksData = weekStarts.map((weekStart, idx) => {
    const rawWeekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });
    const weekEnd = min([rawWeekEnd, end]); // чтобы последняя неделя не вылезала за пределы года

    const normalizedWeekEnd = startOfDay(weekEnd);
    const normalizedCurrentDate = startOfDay(currentDate);

    const isPassed =
      isBefore(normalizedWeekEnd, normalizedCurrentDate) ||
      isEqual(normalizedWeekEnd, normalizedCurrentDate);

    return {
      id: idx,
      weekNumber: idx + 1,
      startDate: format(weekStart, 'dd.MM.yyyy'),
      endDate: format(weekEnd, 'dd.MM.yyyy'),
      isPassed,
    };
  });

  console.log('MementoYear', {
    start,
    end,
    diff,
    weeksBeforeToday,
    weeksData,
  });

  return (
    <div>
      <h3>Weeks of the Year</h3>
      <div className="memento-row mt-4">
        {weeksData.map((week) => (
          <div key={week.id} title={`${week.startDate} - ${week.endDate}`}>
            <MementoSquare isFilled={week.isPassed} />
          </div>
        ))}
      </div>
    </div>
  );
};
