import { useNavigate } from 'react-router-dom';

export default function Elev(props) {

    let name = props.name;

    const navigate = useNavigate();

    return (
        <div className='elev' onClick={() => navigate('profile')}> {name} </div>
    )
}