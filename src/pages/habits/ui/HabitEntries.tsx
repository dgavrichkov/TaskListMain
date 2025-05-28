import { HabitModel } from '../model/store';
import { observer } from 'mobx-react-lite';
import { differenceInCalendarDays, format, parseISO } from 'date-fns';

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
      <p>Создано: {formatedCreated}</p>
      <ul>
        {dates.map((date) => {
          const entry = habit.getEntryByDate(date);
          return (
            <li key={date}>
              {format(parseISO(date), 'dd.MM.yyyy')} — {entry?.completed ? '✅' : '⬜️'}
            </li>
          );
        })}
      </ul>
    </div>
  );
});
