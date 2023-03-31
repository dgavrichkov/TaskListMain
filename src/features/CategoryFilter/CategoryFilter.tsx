import styled from "styled-components";
import { DEFAULT_FILTER } from "../../constants/defaultFilterValue";
import { Tag } from "../../types/Tag";
import { TagList, Button } from "../../shared/ui";

type FilterProps = {
  filter: string;
  tags: Tag[];
  onClickAction: (filter: string) => void;
};

export const CategoryFilter = ({
  filter,
  tags,
  onClickAction,
}: FilterProps) => {
  return (
    <StyledWrap>
      <h4>Category Filter</h4>
      <div>Текущий фильтр - {filter}</div>
      <Button
        buttonType="button"
        className="item item--clear"
        onClick={() => {
          onClickAction(DEFAULT_FILTER);
        }}
      >
        Clear filter
      </Button>
      <TagList tags={tags} onClickAction={onClickAction}></TagList>
    </StyledWrap>
  );
};

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
  h4 {
    margin-bottom: 14px;
  }
  .item {
    margin: 10px;
    cursor: pointer;
    &--clear {
      width: 100%;
    }
  }
`;
