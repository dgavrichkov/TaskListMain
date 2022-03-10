import { CreateTaskForm } from "../CreateTaskForm"
import { TagFilter } from "../TagFilter"
import { TaskList } from "../TaskList"
import { TaskStat } from "../TaskStat"

export const TasksPage = () => {
    return (
        <>
            <h2 className="title">Tasks</h2>
            <section className="form">
                <CreateTaskForm />
            </section>
            <section className="aside">
                <TagFilter />
                <TaskStat />
            </section>
            <section className="content">
                <TaskList />
            </section>
        </>
    )
}