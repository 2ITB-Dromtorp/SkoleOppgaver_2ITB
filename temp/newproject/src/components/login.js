import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import users from './../data/users'


export default function Login(props) {

    const navigate = useNavigate();

    const[InPassword, setInPassword] = useState("")
    const[InUsername, setInUsername] = useState("")
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    let ErrorMes = "";

    const handleUsername = Event => {
        setInUsername(Event.target.value)
    }

    const handlePassword = Event =>{
        setInPassword(Event.target.value)
    }

    function handleSubmit() {
        console.log('Do the logic like before and naivate to /home');
        navigate('/home');
    }


    return(
        <div onSubmit={handleSubmit}>
            <form>
                <label> Username</label>
                <input type="text" value="John" onChange={handleUsername}/>
                <label>Password</label>
                <input type="text" onChange={handlePassword}/>
                <input type="submit" value="Submit"/>
            </form>
            <br/>
        </div>

    )

}
