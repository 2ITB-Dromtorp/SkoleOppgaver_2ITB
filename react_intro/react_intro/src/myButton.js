import './App.css';

function useList() {

  alert('This is this buttons function');

}

export default function MyButton() {

  let products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

    return (
      <div>
        <h1>Welcome to my app</h1>
        <button className='button' onClick={useList}>I'm a button</button>
        <ul>{listItems}</ul>
      </div>
    );
  }

