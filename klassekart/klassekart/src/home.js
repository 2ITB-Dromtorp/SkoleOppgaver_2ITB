import './App.css';
import Elev from './Elev';

export default function Home() {

    return (

        <div className="container">

        <div className='leftside'>

            <div className='box'>

              <div className='tositteplasser'>
                <Elev />
                <Elev />
              </div>

              <div className='tositteplasser'> 
                <Elev />
                <Elev />
              </div>

              <div className='tositteplasser'> 
                <Elev />
                <Elev />
              </div>

            </div>
          </div>
            

        <div className='rightside'>

        <div className='box'>

            <div className='tresitteplasser'> 
                <Elev />
                <Elev />
                <Elev />
              </div>

              <div className='tresitteplasser'> 
                <Elev />
                <Elev />
                <Elev />
              </div>

              <div className='tresitteplasser'> 
                <Elev />
                <Elev />
                <Elev />
              </div>
            
          </div>

          </div>


        </div>
    )
}