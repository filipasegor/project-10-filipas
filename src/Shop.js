import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import ItemsList from "./ItemsList.js";
import Item from "./Item.js";
import AddItem from "./AddItem.js";
import UiTitle from "./UiTitle.js";
import Bitcoin from "./Bitcoin.js";


export default function Shop() {

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    if(saved){
      return JSON.parse(saved);
    } else {
      return []
    }
  });

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [validation, setValidation] = useState("");
  const [data, setData] = useState();


  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items]);



  useEffect(() => {
      if (items.length === 0) {
        document.getElementById("items-lenght").innerHTML = "Товары отсутствуют";
      } else {
        document.getElementById("items-lenght").innerHTML = `Товаров добавелено: ${items.length}`;
      }
  });

  function handleFormSubmit(e) {
    e.preventDefault();

    const requestOptions  = {
      method: "POST",
      body: JSON.stringify({
        name: "name",
        desc: "desc"
      }),
      headers: {"Content-type": "application/json"}
    }

    fetch("https://covid-shop-mcs.herokuapp.com", requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })


    if (!name && !desc) {
      setValidation("Введите название и описание");
    } else if (!name) {
      setValidation("Введите название");
    } else if (!desc) {
      setValidation("Введите описание");
    } else {
      setItems([...items, { name: name, desc: desc, id: uuid() }]);
      setName("");
      setDesc("");
      setValidation("");
    }

  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }


  function handleDeleteClick() {
    setItems(items.splice(1));
  }



  const uiTitle = (
    <div>
      <UiTitle fontSize={"50px"} margin={"10px"} className="ui-title">Добавьте первый товар</UiTitle>
    </div>
  );

  const uiTotal = (
    <div>
      <UiTitle fontSize={"50px"} margin={"10px"} className="ui-title">Всего добавлено:</UiTitle>
    </div>
  )

  return (
    <>
      {items.length > 0 ? !uiTitle : uiTitle}
      <AddItem onFormSubmit={handleFormSubmit} name={name} onNameChange={handleNameChange} onDescChange={handleDescChange} desc={desc} onButtonClick={handleFormSubmit} validation={validation}/>

      <ItemsList onDeleteClick={handleDeleteClick} items={items} />
      <UiTitle fontSize={"20px"} margin={"40px 10px 20px 10px"} id="items-lenght"></UiTitle>
    </>
  );

}
