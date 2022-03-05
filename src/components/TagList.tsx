import { Fragment } from "react";
import { Tag } from "../types/Tag";
import { Button } from "./Button";

type TagListProps = {
    tags: Tag[],
    onPickTag: (tag: string) => void;
}

export const TagList = ({tags, onPickTag}: TagListProps) => {
    return (
      <Fragment>
        {tags.map((tag) => {
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
        })}
      </Fragment>
    )
}