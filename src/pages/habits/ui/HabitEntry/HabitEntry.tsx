import { format } from 'date-fns';
import { IEntry } from '../../model/types';
import { cn } from '@/shared/shadcn/utils';
import { Button } from '@/shared/shadcn/ui/button';
import { CheckIcon } from 'lucide-react';
import { HabitModel } from '../../model/store';

type Props = {
  date: string;
  habit: HabitModel;
  habitEntries: IEntry[];
};

export const HabitDaymark = ({ date, habitEntries, habit }: Props) => {
  const todayString = format(new Date(), 'yyyy-MM-dd');
  const isMultiple = habit.countToComplete > 1;

  const handleEntryToggle = () => {
    // habit.toggleEntry(date);
  };

  return (
    <div className={cn('flex')}>
      {habitEntries.length > 0 ? (
        <Button
          className={cn('bg-green-600 hover:bg-green-700 text-white')}
          size="icon"
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
