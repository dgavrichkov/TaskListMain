import { HabitModel } from '../model/store';
import { observer } from 'mobx-react-lite';
import { differenceInCalendarDays, format, parseISO } from 'date-fns';
import { HabitEntry } from './HabitEntry';

type Props = {
  habit: HabitModel;
};

export const HabitEntries = observer(({ habit }: Props) => {
  const isoCreated = parseISO(habit.createdAt);
  const formatedCreated = format(isoCreated, 'dd-MM-yyyy');
  const dayCount = differenceInCalendarDays(new Date(), isoCreated);
  const dates: string[] = [];

  // Генерируем список дат от создания до сегодня
  for (let i = 1; i <= dayCount; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.unshift(format(date, 'yyyy-MM-dd')); // от старых к новым
  }
  return (
    <div>
      <p className="mb-2">Создано: {formatedCreated}</p>
      {/* view - месяц */}
      <ul className="grid grid-cols-31 gap-2">
        {dates.map((date) => {
          const entry = habit.getEntryByDate(date);
          return (
            <li key={date} title={format(parseISO(date), 'dd.MM.yyyy')}>
              {entry ? <HabitEntry habitEntry={entry} /> : <span>⬜️</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
});
