import React from "react";
import uuid from "react-uuid";
import Item from "./Item.js";
import ButtonSecondary from "./ButtonSecondary.js";
import styled from "styled-components";

const UiList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`

export default function ItemsList(props){

return <>
    <UiList className="ui-list">
      {props.items.map((item, index) => (
        <li key={item.id}>
        <Item info={item} />
        <ButtonSecondary className="item-button" onClick={props.onDeleteClick}>
          Удалить
        </ButtonSecondary>
         </li>
      ))}
    </UiList>
    </>
};
