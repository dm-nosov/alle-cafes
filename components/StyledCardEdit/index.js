import styled from "styled-components";
import { StyledCard } from "../StyledCard/index";
export const StyledCardEdit = styled(StyledCard)`
  form {
    display: flex;
    flex-direction: column;
  }
  menu {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    justify-content: end;
  }

  label {
    font-size: x-small;
    margin-bottom: 0.5rem;
    margin-left: 2px;
  }
  input[type="text"].error {
  }
  small {
    margin-bottom: 0.5rem;
  }
`;
