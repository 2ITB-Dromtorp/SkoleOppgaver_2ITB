import logo from './logo.svg';
import './App.css';
import Login from './login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>          
            <Routes>                                                          
                <Route path="/" element={<Login/>}/>
            </Routes>                    
        </Router>
        
      </header>
    </div>
  );
}

export default App;
