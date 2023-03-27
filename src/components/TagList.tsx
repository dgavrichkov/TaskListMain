import { Tag } from "../types/Tag";
import { Button } from "../shared/ui/";

type TagListProps = {
    tags: Tag[],
    onClickAction: (name: string) => void,
}

export const TagList = ({tags, onClickAction}: TagListProps) => {
  return (
    <>
      {tags.map((tag) => {
        return (
          <Button
            buttonType="button"
            className="item"
            key={tag.id}
            onClick={() => {
              onClickAction(tag.tagname)
            }}
          >
            {tag.tagname}
          </Button>
        );
      })}
    </>
  )
}
