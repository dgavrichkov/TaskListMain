import { Button } from '@/shared/shadcn/ui/button';
import { CheckCircleIcon, CircleIcon } from 'lucide-react';
import { HabitModel } from '../../model/store';
import { format } from 'date-fns';
import { cn } from '@/shared/shadcn/utils';

type Props = {
  habit: HabitModel;
};

export const HabitTodayButton = ({ habit }: Props) => {
  const todayString = format(new Date(), 'yyyy-MM-dd');
  const isTodayCompleted = habit.getEntryByDate(todayString)?.completed;

  const handleTodayButtonClick = () => {
    habit.toggleEntry(todayString);
  };

  return (
    <Button
      className={cn('cursor-pointer ml-auto', {
        'bg-green-600 hover:bg-green-700 text-white': isTodayCompleted,
        'bg-yellow-600 hover:bg-yellow-700': !isTodayCompleted,
      })}
      size="icon"
      title="Выполнить"
      type="button"
      variant="default"
      onClick={handleTodayButtonClick}
    >
      {isTodayCompleted ? <CheckCircleIcon /> : <CircleIcon />}
    </Button>
  );
};
