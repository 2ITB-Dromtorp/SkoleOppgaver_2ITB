import React, { useState, useEffect } from 'react';
import './../styles/topnav.css';
import Courses from '../data/courses';

const SearchBar = ({ onSelectItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState([false])

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('courses'));
    if (!savedCourses) {
      localStorage.setItem('courses', JSON.stringify(Courses));
      setSearchResults(Courses);
    } else {
      setSearchResults(savedCourses);
    }
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredResults = Courses.filter((item) =>
      item.courseNameNor.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);

    localStorage.setItem('courses', JSON.stringify(filteredResults));
  };

  const handleClickItem = (index) => {
    onSelectItem(index, searchResults);
  };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }
  
  openNav() {
    this.setState(({ width }) => ({
      width: 250
    }));
  }

  closebtn() {
    this.setState(({ width }) => ({
      width: 0
    }));
  }
}

  return (
    <div>
        <div className='Header'>
        <input
            className='openbtn'
            onClick={() => this.openNav()}
            type='button'
        ></input>
        <input
                className='SearchBar'
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
        <input
            className='accountbtn'
            type='button'
        ></input>
      </div>
        <div id="mySidepanel" class="sidepanel" style={{ width: this.state.width }}>
            <a href="javascript:void(0)" class="closebtn" onClick={() => this.closebtn()}>&times;</a>
                <Routes>
                <Route path="/" element={topnaveng } >Home</Route>
                <Route path="/Login/Register" element={<Register setEpost={setEpost} setPassord={setPassord} />} ></Route>
                <Route path="/Login" element={<Login Passord={Passord} Epost={Epost} setIsLogedIn={setIsLoggedIn}/>} />
                </Routes>
        </div>
      <ul>
        <div className='resultContainer'>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => handleClickItem(index)}>
            <div className='result'>
            <img
              className='resultImage'
              src={result.src} 
              alt={result.courseName}
            />
            <div className='resultDescription'>
            <p className='resultTitle' >{result.courseName}</p>
            <p className='resultDate' >{result.date}</p>
            <p className='resultTime' >{result.time}</p>
            </div>
            </div>
          </li>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default SearchBar;