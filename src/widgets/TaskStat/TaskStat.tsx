import { FC } from 'react';
import { useAppSelector } from '../../app/store';
import { Card, CardContent } from '@/shared/ui/Card';

type TStatProps = {
  pageClass?: string;
};

export const TaskStat: FC<TStatProps> = ({ pageClass }) => {
  const tasks = useAppSelector((state) =>
    state.tasks.idList.map((id: string) => state.tasks.data[id]),
  );

  const countAllTasks = () => {
    return tasks.length;
  };

  const countDoneTasks = () => {
    return tasks.filter((task) => task.done).length;
  };

  return (
    <Card className={`${pageClass}`}>
      <CardContent>
        <p>Всего - {countAllTasks()}</p>
        <p>Сделано - {countDoneTasks()}</p>
      </CardContent>
    </Card>
  );
};
