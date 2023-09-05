import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function newPage() {
  return (
    <h1> Dette er en ny side </h1>
  )
}

function clickButton() {
  console.log('Button clicked');
}

function Uselist() {

  const products = [

    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },

  ];

  const listItems = products.map(product =>

    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
    }}

  >
    {product.title}
  </li>
  );

    /* ListItems er det samme som:
    <ul>
      <li> First element </li>
      <li> Second Element </li>
      <li style="color: Magenta"> Third element </li>
    </ul>
*/


  return <ul>{listItems}</ul>
  
}

export default function MyButton() {

  function UseListfunction() {
    console.log('Her kan jeg manipulere noe for å bruke i komponenten');
  }
  
    return (
      <div>
        <h1>Welcome to my app</h1>
        <button className='button' onClick={clickButton}>I'm a button</button>
        <Uselist />
        {UseListfunction}
      </div>
    );
  }

