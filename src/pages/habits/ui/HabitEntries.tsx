import { HabitModel } from '../model/store';
import { observer } from 'mobx-react-lite';
import { differenceInCalendarDays, format, parseISO, startOfWeek } from 'date-fns';
import { HabitDaymark } from './HabitEntry';
import { cn } from '@/shared/shadcn/utils';

type Props = {
  habit: HabitModel;
};

export const HabitEntries = observer(({ habit }: Props) => {
  const isoCreated = parseISO(habit.createdAt);
  const formatedCreated = format(isoCreated, 'dd-MM-yyyy');
  const dayCount = differenceInCalendarDays(new Date(), isoCreated);
  const dates: string[] = [];
  // const createdWeekStartDate = startOfWeek(isoCreated);
  // const currentWeekStartData = startOfWeek(new Date());

  // Генерируем список дат от создания до сегодня
  for (let i = 0; i <= dayCount; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.unshift(format(date, 'yyyy-MM-dd')); // от старых к новым
  }

  return (
    <div>
      <p className="mb-2">Создано: {formatedCreated}</p>
      {/* view - месяц */}
      <ul className="grid grid-cols-31 gap-2" style={{ width: 'max-content' }}>
        {dates.map((date) => {
          const entries = habit.getEntriesByDate(date);
          return (
            <li className="flex" key={date} title={format(parseISO(date), 'dd.MM.yyyy')}>
              <HabitDaymark date={date} habit={habit} habitEntries={entries} />
            </li>
          );
        })}
      </ul>
    </div>
  );
});
