import { Card, CardFooter, CardHeader, CardTitle } from '@/shared/shadcn/ui/card';
import { observer } from 'mobx-react-lite';
import { HabitItemDelete } from './HabitItemDelete';
import { HabitModel } from '../model/store';
import { useEffect } from 'react';
import { PanelLeft } from 'lucide-react';
import { HabitTodayButton } from './HabitTodayButton/HabitTodayButton';
import { HabitCalendar } from './HabitCalendar';
import { Button } from '@/shared/ui';

type Props = {
  habit: HabitModel;
};

export const HabitItem = observer(({ habit }: Props) => {
  useEffect(() => {
    habit.loadEntries();
  }, [habit]);

  return (
    <Card className="mb-4 px-4 py-4 gap-2">
      <CardHeader className="flex gap-2 items-center p-0">
        <Button className="mr-2 cursor-pointer" size="icon" title="menu" variant="ghost">
          <PanelLeft />
        </Button>
        <CardTitle>{habit.title}</CardTitle>
        <HabitTodayButton habit={habit} />
      </CardHeader>
      {habit.description && <p>{habit.description}</p>}
      <HabitCalendar habit={habit} />
      <CardFooter className="p-0">
        <HabitItemDelete {...habit} />
      </CardFooter>
    </Card>
  );
});
