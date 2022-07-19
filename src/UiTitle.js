import React, { useState } from "react";
import styled from "styled-components";


const StyledTitle = styled.h1`
  margin: ${({margin}) => margin || "0px"};
  font-size: ${({fontSize}) => fontSize || "40px"};
`


export default function uiTitle(props) {
  return <StyledTitle {...props} />
}
