import { Card } from '@/shared/shadcn/ui/card';
import { observer } from 'mobx-react-lite';
import { Button } from '@/shared/shadcn/ui/button';
import { HabitItemDelete } from './HabitItemDelete';
import { HabitEntries } from './HabitEntries';
import { HabitModel } from '../model/store';
import { useEffect } from 'react';

type Props = {
  habit: HabitModel;
};

export const HabitItem = observer(({ habit }: Props) => {
  useEffect(() => {
    habit.loadEntries();
  }, [habit]);

  return (
    <Card className="mb-4 px-2 py-3 gap-2">
      <strong>{habit.title}</strong>
      {habit.description && <p>{habit.description}</p>}
      <Button className="cursor-pointer" type="button" variant={'default'}>
        Выполнить
      </Button>
      <HabitItemDelete {...habit} />
      <HabitEntries habit={habit} />
    </Card>
  );
});
