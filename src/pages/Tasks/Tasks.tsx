import { FC } from 'react';
import { Portal } from '../../shared/lib/Portal';
import { CreateTaskForm, TaskList, TaskStat } from '../../widgets';
import { StyledListPageWrap } from '../../shared/layouts';
import { Filter } from '../../features';

export const Tasks: FC = () => {
  return (
    <StyledListPageWrap>
      <h2 className="title">Tasks</h2>
      <section className="form">
        <CreateTaskForm />
      </section>
      <section className="aside">
        <Filter forPage="tasks" />
        <TaskStat />
      </section>
      <section className="content">
        <TaskList />
      </section>
      <Portal portalId="header-portal"></Portal>
    </StyledListPageWrap>
  );
};
