import { Portal } from '../../shared/lib/Portal';
import { CreateTaskForm, TaskList, TaskStat } from "../../widgets";
import { StyledListPageWrap } from "../../shared/layouts";
import { useAppSelector } from '../../app/store';

export const Tasks = () => {
  const categories = useAppSelector((state) => state.categories.categories);

  return (
    <StyledListPageWrap>
      <h2 className="title">Tasks</h2>
      <section className="form">
        <CreateTaskForm />
      </section>
      <section className="aside">
        <div>
          <h4>Categories:</h4>
          {categories.map((ctg) => (
            <div key={ctg.id} style={{ margin: "4px" }}>
              {ctg.title}
            </div>
          ))}
        </div>
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
