import { useState } from "react";
 
export default function Login() {
 
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
 
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Submitted')
    }
 
    return (
        <>
            <h1>login form</h1>
 
        <form onSubmit={handleSubmit}>
            <label> Brukernavn </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label>Last name:</label>
            <input type="text" value="Doe" onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Logg inn"/>
        </form>
 
        </>
    )
}