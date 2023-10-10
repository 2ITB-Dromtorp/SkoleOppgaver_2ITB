import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Profile() {

    const navigate = useNavigate();

    let profileParams = useParams();

    return (
        <>
        <div className='profile-container'>

        <div className='profile-box'>

            <h1> Dette er profilen til {profileParams.profile} </h1>
            <button onClick={() => navigate(-1)}> Tilbake til hovedmeny </button>

        </div>
        </div>
        </>
    )
}