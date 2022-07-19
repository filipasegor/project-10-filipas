import React, {useState, useEffect} from "react"
import {render} from "react-dom";


export default function Bitcoin() {

  const [currency, setCurrency] = useState("")
 const [price, setPrice] = useState("")
 const [loader, setLoader] = useState(false)

 useEffect(() => {
   if (currency) {
     setLoader(true)
     fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
     .then(response => response.json())
     .then(data => {
       if (data) {
         setPrice(data.bpi[currency].rate)
       }
     })
     .catch(error => console.error(error))
     .finally(() => {
       setLoader(false)
     })
   }
 }, [currency])

 function handleCurrencyChange(e) {
   setCurrency(e.target.value)
 }

 return <>
   <h2>Курс биткоина</h2>
   <select onChange={handleCurrencyChange} disabled={loader}>
     <option value="">Выберите валюту</option>
     <option value="USD">Доллар</option>
     <option value="EUR">Евро</option>
     <option value="RUB">Рубль</option>
   </select>
   <h3>{price}</h3>
 </>

}
