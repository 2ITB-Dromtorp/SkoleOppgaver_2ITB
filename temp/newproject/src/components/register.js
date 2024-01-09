import users from './../data/users'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Register({setPassord, setEmail, setUsername}) {

    const navigate = useNavigate();

    const[InEmail, setInEmail] = useState("")
    const[InPassword, setInPassword] = useState("")
    const[InUsername, setInUsername] = useState("")
    let ErrorMes = ""

    const handleEmail = Event =>{
        setInEmail(Event.target.value)
    }

    const handleUsername = Event =>{
        setInUsername(Event.target.value)
    }

    const handlePassword = Event =>{
        setInPassword(Event.target.value)
    }

    const registrer = () =>{
        if (InEmail.length === 0 || InPassword.length === 0 || InUsername.length === 0) {
            console.log("vennligst fyll in feltene")
        } else {
            // eslint-disable-next-line no-unused-vars
            const newusers = [...users, {"username": {InUsername}, "email": {InEmail}, "password": {InPassword}, "inNorwegian": false, "inHeimkunnskap": false, "inGrunnleggendeDatakunnskap": false, "inKroppsoving": false }]
            navigate(-1)
        }
        

    }


    return(
        <div>
        <h1>Registrer deg:</h1>

        <label>
                epost: <input type='text' value={InEmail} onChange={handleEmail}/> 
        </label>
        <label>
                brukernavn: <input type='text' value={InEmail} onChange={handleUsername}/> 
        </label>
        <label>
                passord: <input type='text' value={InPassword} onChange={handlePassword}/> 
        </label>
        <br/>
        <button onClick={() => navigate(-1)}>Har du bruker? Logg in her:</button>

        <p> {ErrorMes} </p>
        <button onClick={registrer}> registrer deg </button>
        </div>


    )

}

