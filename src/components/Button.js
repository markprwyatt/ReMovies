import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  width: 7rem;
  font-size: 1.3rem;

  &:hover {
    background-color: #373a47;
    color: #fff;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ text, handleClick }) => {
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
