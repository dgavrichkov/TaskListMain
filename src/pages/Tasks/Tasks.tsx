import React from 'react';
import { Filter } from 'features';
import { Portal } from 'shared/lib/Portal';
import { StyledListPageWrap } from 'shared/layouts';
import { CreateTaskForm, TaskList, TaskStat } from 'widgets';

export const Tasks = () => {
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
      <Portal portalId="header-portal">
        <div>Tasks portal block</div>
      </Portal>
    </StyledListPageWrap>
  );
};
