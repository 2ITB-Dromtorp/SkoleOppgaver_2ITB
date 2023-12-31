import logo from './logo.svg';
import './App.css';
import MyButton from './myButton';
import Profile from './ImageEx';


function App() {

  let isLoggedIn;
  let content = <h1> Overskrift </h1>;
  isLoggedIn = true;

  if (isLoggedIn) {
    content = <MyButton />;
  } else {
    content = <Profile />;
  }

  return (
    
    <div className="App">
      <header className="App-header">
        
        <h1> React Intro </h1>
        
        {content}

      </header>
    </div>
  );
}

export default App;
