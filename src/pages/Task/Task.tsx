import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../shared/ui';
import { StyledDetailPageWrap } from '../../shared/layouts';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { deleteTask, selectCategoryById, toggleTask } from '../../entities';

type ParamTypes = {
  taskId: string;
};

export const Task: FC = () => {
  const dispatch = useAppDispatch();
  const { taskId } = useParams<ParamTypes>();
  // TODO: fix architecture for awoiding that dirt
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const task = useAppSelector((state) => state.tasks.data[taskId!]);
  const navigate = useNavigate();
  const category = useAppSelector(selectCategoryById(task.categoryID));

  if (typeof task === 'boolean') {
    return null;
  }

  const handleToggle = () => dispatch(toggleTask(task.id));
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    navigate('../tasks', { replace: true });
  };

  return (
    <StyledDetailPageWrap className={task.done === true ? 'is-done' : ''}>
      <h3>{task.name}</h3>
      <p>{category?.title}</p>
      <i className="id">Task id: {task.id}</i>
      <Button type="button" onClick={handleToggle}>
        {!task.done ? 'Done' : 'Not done'}
      </Button>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </StyledDetailPageWrap>
  );
};
