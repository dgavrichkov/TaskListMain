import { Tag } from "../../../types/Tag";
import { Button } from "..";
import { Styled } from './styled';

type TagListProps = {
    tags: Tag[],
    onClickAction: (name: string) => void,
}

export const TagList = ({tags, onClickAction}: TagListProps) => {
  return (
    <Styled.TagsWrap>
      {tags.map((tag) => {
        return (
          <Button
            buttonType="button"
            className="tag item"
            key={tag.id}
            onClick={() => {
              onClickAction(tag.tagname)
            }}
          >
            {tag.tagname}
          </Button>
        );
      })}
    </Styled.TagsWrap>
  )
}
