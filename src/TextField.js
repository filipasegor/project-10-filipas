import React, { useState } from "react";
import styled from "styled-components";

const StyledTexField = styled.input`
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid var(--light-gray);
  font-size: 16px;
  margin: ${({margin}) => margin || "0px" };
`

export default function TextField(props) {
  return <StyledTexField {...props} />

};
