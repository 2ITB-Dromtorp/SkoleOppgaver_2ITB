import { useState } from 'react';

export default function DigitalClock() {

    let clock = new Date();
    let hh = clock.getHours();
    let mm = clock.getMinutes();
    let ss = clock.getSeconds();

    const [currentTime, newTime] = useState(new Date);
    
    

    setInterval(() => {
        console.log('Hello');
    }, 1000);

    console.log(hh, mm, ss);

    return (
        <div className="App">
            <header className="App-header">
        
            <h1> {console.log(currentTime)} </h1>

            </header>
        </div>
    )
}

