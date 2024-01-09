import axios from "axios";
import { useState, useEffect } from "react";
export default function Update() {

    const [updateElevData, setUpdateElvData] = useState([])

    function handleSubmit(event) {

        event.preventDefault();
        console.log('submitted');

        //Vi lager en GET request der oppdateringen skrives i URL og backend
        // - koden vår leser URLen og setter ordene inn i databasen.

        

        const updateElevDatarequest = () => {
            axios
                .get("http://localhost:3000/updateuser/Håndball/12")
                .then(response => {
                    setUpdateElvData(response.data);
                })
                .catch(error => console.log(error));
        };
        updateElevDatarequest();
        console.log(updateElevData);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Ny hobby: </label>
            <input type="text" placeholder="John"/>
            <label>ElevID</label>
            <input type="number"/>
            <input type="submit" value="Submit"/>
        </form>

        </>
        

    )
}