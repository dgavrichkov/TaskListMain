import { Card, CardFooter, CardHeader, CardTitle } from '@/shared/shadcn/ui/card';
import { observer } from 'mobx-react-lite';
import { Button } from '@/shared/shadcn/ui/button';
import { HabitItemDelete } from './HabitItemDelete';
import { HabitEntries } from './HabitEntries';
import { HabitModel } from '../model/store';
import { useEffect } from 'react';
import { CheckCircle, CircleIcon, PanelLeft } from 'lucide-react';

type Props = {
  habit: HabitModel;
};

export const HabitItem = observer(({ habit }: Props) => {
  useEffect(() => {
    habit.loadEntries();
  }, [habit]);

  return (
    <Card className="mb-4 px-2 py-3 gap-2">
      <CardHeader className="flex gap-2 items-center p-0">
        <Button className="mr-2 cursor-pointer" size="icon" title="menu" variant="ghost">
          <PanelLeft />
        </Button>
        <CardTitle>{habit.title}</CardTitle>
        <Button
          className="cursor-pointer ml-auto"
          size="icon"
          title="Выполнить"
          type="button"
          variant="default"
        >
          <CircleIcon />
        </Button>
      </CardHeader>
      {habit.description && <p>{habit.description}</p>}
      <HabitEntries habit={habit} />
      <CardFooter className="p-0">
        <HabitItemDelete {...habit} />
      </CardFooter>
    </Card>
  );
});
