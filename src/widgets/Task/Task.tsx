import { Button, Panel } from '../../shared/ui';
import { NavLink } from 'react-router-dom';
import { TTask, selectCategoryById } from '../../entities';
import { useAppSelector } from '../../app/store';
import { FC } from 'react';
import { Card, CardFooter, CardHeader } from '@/shared/ui/Card';
import { cn } from '@/shared/shadcn/utils';

type TTaskProps = TTask & {
  onDoneTask: () => void;
  onDeleteTask: () => void;
};

export const Task: FC<TTaskProps> = ({ name, categoryID, id, done, onDoneTask, onDeleteTask }) => {
  const category = useAppSelector(selectCategoryById(categoryID));

  return (
    <Card className={cn({ 'bg-gray-200 inset-shadow-xs': done })}>
      <CardHeader>
        <b className="name">{name}</b>
        <div>
          <i className="category">{category?.title}</i>
        </div>
        <div>
          <NavLink to={id}>Открыть</NavLink>
        </div>
      </CardHeader>

      <CardFooter className="gap-2">
        <Button className="done" type="button" onClick={onDoneTask}>
          {!done ? 'Done' : 'Not Done'}
        </Button>
        <Button className="delete" type="button" onClick={onDeleteTask}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
