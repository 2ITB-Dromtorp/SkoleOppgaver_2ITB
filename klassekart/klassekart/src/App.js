import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Home from './home';


function App() {

  return (

    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:profile" element={<Profile />} />
       </Routes>
    </>

        

  );
}

export default App;
