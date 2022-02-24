import React, { Fragment } from "react";
import { Button } from "./Button";
import nextId from "react-id-generator";
import styled from "styled-components";
import { Task } from "../types/Task";

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

type FilterProps = {
  tasks: Task[];
  pageClass: string;
  currentFilter: string;
  onPickTag: (tag: string) => void;
};

export const TagFilter = React.memo(
  ({ tasks, onPickTag, pageClass, currentFilter }: FilterProps) => {
    const uniqtags = new Set(tasks.map((task: { tag: string }) => task.tag));
    const tags = Array.from(uniqtags).map((uniqtag) => {
      return { id: nextId(), tagname: uniqtag };
    });

    const tagElems = tags.map((tag) => {
      return (
        <Button
          buttonType="button"
          className="item"
          key={tag.id}
          onClick={() => {
            onPickTag(tag.tagname);
          }}
        >
          {tag.tagname}
        </Button>
      );
    });

    return (
      <StyledWrap className={pageClass}>
        {
          <Fragment>
            <div className="tagfilter__title">
              Текущий фильтр - {currentFilter}
            </div>
            <Button
              buttonType="button"
              className="item item--clear"
              onClick={() => {
                onPickTag("all");
              }}
            >
              Clear filter
            </Button>
          </Fragment>
        }
        {tagElems}
      </StyledWrap>
    );
  }
);
