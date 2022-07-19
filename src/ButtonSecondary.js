import React, { useState } from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid var(--light-gray);
  padding: 5px 20px;
  min-width: 50px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  margin-left: 10px;
  &:active{
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }

  &:disabled{
    opacity: 0.4;
    cursor: disabled;
  }
  &:active{
    opacity: 0.8;
  }
`

export default function ButtonSecondary(props){

  return <StyledButton {...props} />
};
