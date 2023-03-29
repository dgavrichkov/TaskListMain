import nextId from "react-id-generator";
import { Portal } from '../../entities/Portal';
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getTasksCategories } from "../../store/selectors/getTasksCategories";
import { CreateTaskForm, TaskList } from "../../widgets";
import { StyledListPageWrap } from "../../components/styled/StyledListPageWrap";
import { TaskStat } from "../../components/TaskStat";
import { CategoryFilter } from '../../features';

export const Tasks = () => {
  const filter = useTypedSelector((state) => state.tasksFilter);
  const categories = useTypedSelector((state) =>
    getTasksCategories(state.tasks)
  );
  const tags = Array.from(categories).map((category) => {
    return { id: nextId(), tagname: category };
  });
  const { tasksFilterChangeAction } = useActions();

  return (
    <StyledListPageWrap>
      <h2 className="title">Tasks</h2>
      <section className="form">
        <CreateTaskForm />
      </section>
      <section className="aside">
        <CategoryFilter
          filter={filter}
          tags={tags}
          onClickAction={tasksFilterChangeAction}
        />
        <TaskStat />
      </section>
      <section className="content">
        <TaskList />
      </section>
      <Portal portalId="header-portal"><div>Tasks portal block</div></Portal>
    </StyledListPageWrap>
  );
};
