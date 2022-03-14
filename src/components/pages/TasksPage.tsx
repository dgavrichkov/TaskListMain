import styled from "styled-components"
import { CreateTaskForm } from "../CreateTaskForm"
import { StyledListPageWrap } from "../styled/StyledListPageWrap"
import { TagFilter } from "../TagFilter"
import { TaskList } from "../TaskList"
import { TaskStat } from "../TaskStat"

export const TasksPage = () => {
    return (
        <StyledListPageWrap>
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
        </StyledListPageWrap>
    )
}