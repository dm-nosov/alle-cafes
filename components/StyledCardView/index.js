import styled from "styled-components";
const { StyledCard } = require("../StyledCard");

export const StyledCardView = styled(StyledCard)`
  img:active {
    background-color: #d0d0d09f;
    border-radius: 12px;
    transition: background-color 1.5s ease;
    transform: scale(1.2);
  }
`;
