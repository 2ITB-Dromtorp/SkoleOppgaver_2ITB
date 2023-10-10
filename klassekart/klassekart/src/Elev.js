import { useNavigate } from 'react-router-dom';

export default function Elev(props) {

    let name = props.name;
    let path = props.name.toLowerCase();

    const navigate = useNavigate();

    /*aconst checkPath = () => {
        if (name in list_of_students) {
            navigate(path);
        } else {
            console.log('Student dont exist')
        }
    } */

    return (


            <div className='elev' onClick={() => 
                navigate(path)}> {name} </div>

        
    )
}