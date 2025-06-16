import { Button } from '@/shared/shadcn/ui/button';
import { CheckCircleIcon, CircleIcon } from 'lucide-react';
import { HabitModel } from '../../model/store';
import { format } from 'date-fns';
import { cn } from '@/shared/shadcn/utils';
import { observer } from 'mobx-react-lite';

type Props = {
  habit: HabitModel;
};

export const HabitTodayButton = observer(({ habit }: Props) => {
  const todayString = format(new Date(), 'yyyy-MM-dd');
  const isSingularHabit = habit.countToComplete === 1;
  const habitEntries = habit.getEntriesByDate(todayString);
  const completedEntries = habitEntries.filter((entry) => entry.completed);
  const isTodayCompleted = completedEntries.length === habit.countToComplete;

  const handleTodayButtonClick = () => {
    if (!isTodayCompleted) {
      habit.createEntryCompletion(todayString);
    } else {
      if (isSingularHabit) {
        habit.deleteEntryCompletion(todayString);
      } else {
        // Если это множественная привычка, то удаляем все записи за сегодня
        habit.deleteDailyCompletions(todayString);
      }
    }
  };

  return (
    <Button
      className={cn('cursor-pointer ml-auto', {
        'bg-green-600 hover:bg-green-700 text-white': isTodayCompleted,
        'bg-yellow-600 hover:bg-yellow-700': !isTodayCompleted,
      })}
      // size="icon"
      title="Выполнить"
      type="button"
      variant="default"
      onClick={handleTodayButtonClick}
    >
      {isTodayCompleted ? <CheckCircleIcon /> : <CircleIcon />}
      {completedEntries.length}/{habit.countToComplete}
    </Button>
  );
});
