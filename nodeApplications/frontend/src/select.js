import { useEffect, useState } from "react";
import axios from "axios";
import './table_style.css';

export default function Select() {
    const [elevData, setElevData] = useState([]);

    useEffect(() => {
        getElevData();
    }, []);

    const getElevData = () => {
        axios
            .get("http://localhost:3000/")
            .then(response => {
                setElevData(response.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <>
        <div className="table-container">
            
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ElevID</th>
                        <th>Fornavn</th>
                        <th>Etternavn</th>
                        <th>DatamaskinID</th>
                        <th>Hobby</th>
                        <th>Klasse</th>
                        <th>Kjønn</th>
                    </tr>
                </thead>
                <tbody>
                    {elevData.map(elev => (
                        <tr key={elev.ElevID}>
                            <td>{elev.ElevID}</td>
                            <td>{elev.Fornavn}</td>
                            <td>{elev.Etternavn}</td>
                            <td>{elev.DatamaskinID}</td>
                            <td>{elev.Hobby}</td>
                            <td>{elev.Klasse}</td>
                            <td>{elev.Kjonn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    );
}
