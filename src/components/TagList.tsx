import { Fragment } from "react";
import { useActions } from "../hooks/useActions";
import { Tag } from "../types/Tag";
import { Button } from "./Button";

type TagListProps = {
    tags: Tag[],
}

export const TagList = ({tags}: TagListProps) => {
  const { filterChangeAction } = useActions();
    return (
      <Fragment>
        {tags.map((tag) => {
          return (
            <Button
              buttonType="button"
              className="item"
              key={tag.id}
              onClick={() => {
                filterChangeAction(tag.tagname)
              }}
            >
              {tag.tagname}
            </Button>
          );
        })}
      </Fragment>
    )
}