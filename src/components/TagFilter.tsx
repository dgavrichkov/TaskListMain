import React, { Fragment } from "react";
import { Button } from "./Button";
import { TagList } from "./TagList";
import nextId from "react-id-generator";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getTasksFromState } from "../store/selectors/tasks";
import { useActions } from "../hooks/useActions";

type FilterProps = {
  pageClass: string;
};

export const TagFilter = React.memo(
  ({ pageClass }: FilterProps) => {
    const tasks = useTypedSelector(getTasksFromState);
    const filter = useTypedSelector((state) => state.filter)
    const { filterChangeAction } = useActions();
    const uniqtags = new Set(tasks.map((task: { tag: string }) => task.tag));
    
    const tags = Array.from(uniqtags).map((uniqtag) => {
      return { id: nextId(), tagname: uniqtag };
    });

    return (
      <StyledWrap className={pageClass}>
        {
          <Fragment>
            <div className="tagfilter__title">
              Текущий фильтр - {filter}
            </div>
            <Button
              buttonType="button"
              className="item item--clear"
              onClick={() => {
                filterChangeAction("all");
              }}
            >
              Clear filter
            </Button>
          </Fragment>
        }
        <TagList tags={tags} />
      </StyledWrap>
    );
  }
);

const StyledWrap = styled.div`
  align-self: start;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  padding: 14px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.button};

  .item {
    margin: 10px;
    cursor: pointer;
    &--clear {
      width: 100%;
    }
  }
`;