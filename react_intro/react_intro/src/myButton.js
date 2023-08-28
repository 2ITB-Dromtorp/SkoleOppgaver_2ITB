import './App.css';

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

  return <ul>{listItems}</ul>
  
}  

export default function MyButton() {

  
    return (
      <div>
        <h1>Welcome to my app</h1>
        <button className='button' onClick={clickButton}>I'm a button</button>
        <Uselist />
      </div>
    );
  }

