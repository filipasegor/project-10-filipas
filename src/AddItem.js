import React from "react";
import ButtonPrimary from "./ButtonPrimary.js";
import TextField from "./TextField.js";


export default function AddItem(props) {
  return (
    <>
      <form onSubmit={props.onFormSubmit}>
        <div>
          <label htmlFor="name"></label>
          <TextField
            margin={"10px"}
            type="text"
            name="name"
            placeholder="Название товара"
            className="ui-textfield"
            value={props.name}
            onChange={props.onNameChange}
          />
        </div>
        <div>
          <label htmlFor="desc"></label>
          <TextField
            margin={"10px"}
            type="text"
            name="desc"
            placeholder="Описание товара"
            className="ui-textfield"
            value={props.desc}
            onChange={props.onDescChange}
          />
        </div>
        <div className="form-footer">
          <div className="validation">{props.validation}</div>
          <ButtonPrimary
            margin={"10px"}
            type="submit"
            className="ui-button"
            value="Добавить"
            onClick={props.onButtonClick}
          />
        </div>
      </form>
  </>
  );
}
