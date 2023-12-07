import { useState } from 'react';
import './App.css';
import Select from './select';
import Update from './update';

export default function Home() {
  const [content, setContent] = useState(<Select />);

  function placeContentSelect() {
    setContent(<Select />);
  }

  function placeContentUpdate() {
    setContent(<Update />);
  }

  function placeContentInsert() {
   setContent(<Update />);
 }

 function placeContentDelete() {
   setContent(<Select />);
 }


  return (
    <div>
      <div className="buttonContainer">
        <button className='button' onClick={placeContentSelect}>Select</button>
        <button className='button' onClick={placeContentUpdate}>Update</button>
        <button className='button' onClick={placeContentInsert}>Insert</button>
        <button className='button' onClick={placeContentDelete}>Delete</button>
      </div>
      <div className='requestContainer'>
        {content}
      </div>
    </div>
  );
}