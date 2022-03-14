import styled from "styled-components";

export const CategoryFilter = () => {
  return (
    <StyledWrap>
      <h4>Category Filter</h4>
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

  .item {
    margin: 10px;
    cursor: pointer;
    &--clear {
      width: 100%;
    }
  }
`;
