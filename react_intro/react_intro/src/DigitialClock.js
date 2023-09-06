import { useState, useEffect } from 'react';

export default function DigitalClock() {

    let clock = new Date();
    let hh = clock.getHours();
    let mm = clock.getMinutes();
    let ss = clock.getSeconds();

    const [currentTime, newTime] = useState(new Date);


//useEffect fires when state change. Fire when renders.
useEffect(() => {
    
    const myInterval = setInterval(() => {

        newTime(new Date);

    }, 1000);

    return () => clearInterval(myInterval);


});
    
    return (
        <div className="App">
            <header className="App-header">
        
            <h1> {currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()} {console.log(currentTime)} </h1>

            </header>
        </div>
    )
}

