import { Card } from '@/shared/shadcn/ui/card';
import { IHabit } from '../model/types';
import { differenceInCalendarDays, format, parseISO } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { Button } from '@/shared/shadcn/ui/button';
import { HabitItemDelete } from './HabitItemDelete';

type Props = IHabit;

export const HabitItem = observer((habit: Props) => {
  const isoCreated = parseISO(habit.createdAt);
  const formatedCreated = format(isoCreated, 'dd-MM-yyyy');
  const dayCount = differenceInCalendarDays(new Date(), isoCreated) + 1;

  return (
    <Card className="mb-4 px-2 py-3 gap-2">
      <strong>{habit.title}</strong>
      {habit.description && <p>{habit.description}</p>}
      <p>Дата создания: {formatedCreated}</p>
      <p>Day count: {dayCount}</p>
      <div>TODO: Таблица отметок привычки</div>
      <Button className="cursor-pointer" type="button" variant={'default'}>
        Выполнить
      </Button>
      <HabitItemDelete {...habit} />
    </Card>
  );
});
