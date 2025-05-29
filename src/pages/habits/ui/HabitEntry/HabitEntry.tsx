import { format } from 'date-fns';
import { IEntry } from '../../model/types';
import { cn } from '@/shared/shadcn/utils';
import { Button } from '@/shared/shadcn/ui/button';
import { CheckIcon } from 'lucide-react';
import { HabitModel } from '../../model/store';

type Props = {
  date: string;
  habit: HabitModel;
  habitEntry: IEntry | undefined | null;
};

export const HabitEntry = ({ date, habitEntry, habit }: Props) => {
  const todayString = format(new Date(), 'yyyy-MM-dd');

  const handleEntryToggle = () => {
    habit.toggleEntry(date);
  };

  return (
    <div className={cn('flex')}>
      {habitEntry && habitEntry.completed ? (
        <Button
          className={cn('bg-green-600 hover:bg-green-700 text-white')}
          size="icon"
          // style={{ width: 22, height: 22 }}
          variant="secondary"
          onClick={handleEntryToggle}
        >
          <CheckIcon />
        </Button>
      ) : (
        <Button size="icon" variant="secondary" onClick={handleEntryToggle}></Button>
      )}
    </div>
  );
};
