import { Portal } from '../../shared/lib/Portal';
import { CreateTaskForm, TaskList, TaskStat } from "../../widgets";
import { StyledListPageWrap } from "../../shared/layouts";

export const Tasks = () => {
  return (
    <StyledListPageWrap>
      <h2 className="title">Tasks</h2>
      <section className="form">
        <CreateTaskForm />
      </section>
      <section className="aside">
        filter will be reworked soon
        <TaskStat />
      </section>
      <section className="content">
        <TaskList />
      </section>
      <Portal portalId="header-portal"><div>Tasks portal block</div></Portal>
    </StyledListPageWrap>
  );
};
