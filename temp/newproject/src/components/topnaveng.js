import React, { useState, useEffect } from 'react';
import './../styles/topnav.css';
import Courses from './../data/courses';
import { useNavigate } from 'react-router-dom';
import { MdOutlineAccountCircle } from "react-icons/md";

const SearchBar = ({ onSelectItem }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
      item.courseName.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);

    localStorage.setItem('courses', JSON.stringify(filteredResults));
  };

  const handleClickItem = (index) => {
    navigate("/home/"+index)
  };

  return (
    <div>
        <div className='Header'>
        <input
            className='openbtn'
            onClick={() => this.openNav()}
            type='button'
        />
        <input
                className='SearchBar'
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
        <input
            className='accountbtn'
            onClick={() => navigate('./login')}
            type='button'
        />
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