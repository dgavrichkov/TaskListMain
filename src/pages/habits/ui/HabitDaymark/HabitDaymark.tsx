import { IEntry } from '../../model/types';
import { cn } from '@/shared/shadcn/utils';
import { Button } from '@/shared/shadcn/ui/button';
import { CheckIcon, CircleDashedIcon } from 'lucide-react';
import { HabitModel } from '../../model/store';

type Props = {
  date: string;
  habit: HabitModel;
  habitEntries: IEntry[];
};

export const HabitDaymark = ({ date, habitEntries, habit }: Props) => {
  const isCompleted = habitEntries.length === habit.countToComplete;
  const size = 24;

  return (
    <div className={cn('flex')}>
      {habitEntries.length > 0 ? (
        <Button
          className={cn('bg-green-600 hover:bg-green-700 text-white')}
          size="icon"
          style={{ width: size, height: size }}
          variant="secondary"
        >
          {isCompleted ? <CheckIcon /> : <CircleDashedIcon />}
        </Button>
      ) : (
        <Button size="icon" style={{ width: size, height: size }} variant="secondary"></Button>
      )}
    </div>
  );
};
