import styled from "styled-components";
import { Panel } from "../../../shared/ui";

const Wrap = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const InfoPanel = styled(Panel)`
  grid-column: span 2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const PersonalPanel = styled(Panel)`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;

  & .personal__image {
    grid-column: 1 / span 2;
    justify-self: center;
  }
`;

const Entry = styled.div`
  display: grid;
  gap: 8px;

  span {
    font-style: italic;
  }

  div {
    font-weight: bold;
  }
`

export const Styled = { Wrap, InfoPanel, PersonalPanel, Entry };
