import styled from "styled-components";
import { DEFAULT_FILTER } from "../../constants/defaultFilterValue";
import { Button } from "../../shared/ui";

type FilterProps = {
  filter: string;
  onClickAction: (filter: string) => void;
};

export const CategoryFilter = ({
  filter,
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
    &--clear {
      width: 100%;
    }
  }
`;
