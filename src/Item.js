import React, { useState } from "react";
import styled from "styled-components";
import ButtonSecondary from "./ButtonSecondary.js";


const ItemTotal = styled.div`
  font-size: 16px;
`

const ItemQuanityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${({margin}) => margin || "0px"}
`
const ItemInfoInner = styled.div`
  margin-left: 10px;
`

const TitleMd = styled.h2 `
  font-size: 30px;
  color: ${props => props.color};
`

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <ItemInfoInner  className="item-info">
        <TitleMd className="item-title">{info.name}</TitleMd>
        <p className="item-desc">{info.desc}</p>
      </ItemInfoInner>
      <ItemQuanityWrapper margin={"20px 0px 20px 0px"} className="item-quantity">
        <ButtonSecondary
          className="item-button"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </ButtonSecondary>
        <ItemTotal className="item-total">{total ? total : ""}</ItemTotal>
        <ButtonSecondary className="item-button" onClick={handleAddClick}>
          +
        </ButtonSecondary>
      </ItemQuanityWrapper>
    </div>
  );
}
