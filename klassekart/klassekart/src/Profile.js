import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const navigate = useNavigate();
    
    return (
        <>
        <div className='profile-container'>

        <div className='profile-box'>

            <h1> Dette er profilen til eleven </h1>
            <button onClick={() => navigate(-1)}> Tilbake til hovedmeny </button>

        </div>
        </div>
        </>
    )
}