import { observer } from 'mobx-react-lite';
import { differenceInCalendarDays, endOfWeek, format, parseISO, startOfWeek } from 'date-fns';
import { ru } from 'date-fns/locale';
import { HabitModel } from '../../model/store';
import { HabitDaymark } from '../HabitDaymark';
import css from './HabitCalendar.module.css';

type Props = {
  habit: HabitModel;
};

export const HabitCalendar = observer(({ habit }: Props) => {
  const isoCreated = parseISO(habit.createdAt);
  const formatedCreated = format(isoCreated, 'dd-MM-yyyy');
  const createdWeekStartDate = startOfWeek(isoCreated, { locale: ru });
  const currentEndOfWeek = endOfWeek(new Date(), { locale: ru });
  const dayCount = differenceInCalendarDays(currentEndOfWeek, createdWeekStartDate);
  const dates: string[] = [];

  // Генерируем список дат от creaedWeekStartDate до текущей даты
  for (let i = 0; i <= dayCount; i++) {
    const date = format(
      new Date(createdWeekStartDate.getTime() + i * 24 * 60 * 60 * 1000),
      'yyyy-MM-dd',
    );
    dates.push(date);
  }

  return (
    <div>
      <p className="mb-2">
        Создано: {formatedCreated}, ПН - {format(createdWeekStartDate, 'dd.MM.yyyy')}
      </p>
      <div className={css.calendarBox}>
        <ul className={css.legend}>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>
        <ul className={css.calendargrid}>
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
    </div>
  );
});
