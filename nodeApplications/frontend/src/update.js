import axios from "axios";
import { useState, useEffect } from "react";
export default function Update() {

    const [updateElevData, setUpdateElvData] = useState([])
    const [hobby, setHobby] = useState('');
    const [elevID, setelevID] = useState('');

    function handleSubmit(event) {

        event.preventDefault();
        console.log('submitted');

        //Vi lager en GET request der oppdateringen skrives i URL og backend
        // - koden vår leser URLen og setter ordene inn i databasen.

        const updateElevDatarequest = () => {

            let query = "http://localhost:3000/updateuser/"+hobby+"/"+JSON.stringify(elevID);

            axios
                .get(query)
                .then(response => {
                    setUpdateElvData(response.data);
                })
                .catch(error => console.log(error));
        };
        updateElevDatarequest();
        console.log(updateElevData);
    }

    function performPostRequest(event) {

        event.preventDefault();
        console.log('Trying to do a post request')

        let jsonObject = {
            newhobby: hobby,
            elevid: elevID
        }

        axios.post('http://localhost:3000/updateuser', jsonObject)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }


    return (
        <>
        <form onSubmit={performPostRequest}>
            <label>Ny hobby: </label>
            <input type="text" value={hobby} onChange={(e) => setHobby(e.target.value)}/>
            <label>ElevID</label>
            <input type="number" value={elevID} onChange={(e) => setelevID(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>

        </>
        

    )
}