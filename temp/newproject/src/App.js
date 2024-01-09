import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchBar from './components/topnaveng'
import './styles/topnav.css';
import Login from './components/login';
import Register from './components/register';
import Fag from './components/Fag';

function App() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(true);
  

  let HomePage;

if (IsLoggedIn) {
    HomePage = SearchBar;
  } else {
    HomePage = Login;
  } 
  

  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<SearchBar />} />
        <Route path="/home/login" element={<Login />} />
        <Route path="/home/:fag" element={<Fag />} />
      </Routes>
  )
}

export default App;
