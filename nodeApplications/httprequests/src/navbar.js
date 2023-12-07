import './App.css';
import Select from './select';
import Update from './update';
import Insert from './insert';
import Delete from './delete';
import { useState } from 'react';

export default function Navbar() {

    const [content, setContent] = useState(<Select />)

    function selectPush() {
        setContent(<Select />);
    }

    function updatePush() {
        setContent(<Update />);
    }

    function updateInsert() {
        setContent(<Insert />);
    }

    function updateDelete() {
        setContent(<Delete />);
    }

    return (
        <>
            <div className="App">
                <div className="navbar">
                    <button className="navbar-item" onClick={selectPush}>SELECT</button>
                    <button className="navbar-item" onClick={updatePush}>UPDATE</button>
                    <button className="navbar-item" onClick={updateInsert}>INSERT</button>
                    <button className="navbar-item" onClick={updateDelete}>DELETE</button>
                </div>
                <div className="mainbox">
                    <div className='content'>
                        {content}
                    </div>
                </div>
            </div>
        </>
    );
}
