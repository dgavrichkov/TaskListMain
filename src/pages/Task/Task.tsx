import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/store';
import { deleteTask, selectCategoryById, toggleTask } from 'entities';
import { Button } from 'shared/ui';
import { StyledDetailPageWrap } from 'shared/layouts';

type ParamTypes = {
  taskId: string;
};

export const Task = () => {
  const dispatch = useAppDispatch();
  const { taskId } = useParams<ParamTypes>();
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
      <Button buttonType="button" onClick={handleToggle}>
        {!task.done ? 'Done' : 'Not done'}
      </Button>
      <Button buttonType="button" onClick={handleDelete}>
        Delete
      </Button>
    </StyledDetailPageWrap>
  );
};
