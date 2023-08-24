import './App.css';

function HelloWorld() {
    console.log('wha');
}

export default function MyButton() {

    return (
      <div>
        <h1>Welcome to my app</h1>
        <button className='button' onClick={HelloWorld}>I'm a button</button>
      </div>
    );
  }

