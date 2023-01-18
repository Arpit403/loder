import '../App.css';
import {useState} from 'react'
import Fr from './Fr';
import Ve from './Ve';
import Df from './Df';
function Fruit() {
    
    const [active,setactive] = useState(false)
    return(
        <>

            <input type="button" value="Fruit"  onClick={()=>{setactive('1')}}/>
            <input type="button" value="Vegetable"  onClick={()=>{setactive('2')}}/>
            <input type="button" value="Dry fruit"  onClick={()=>{setactive('3')}}/>
            {
               (active=='1' && <Fr/>)
            }
            {
                (active=='2' && <Ve/>)
            }
            {
                (active=='3' && <Df/>)
            }

        </>
    );
}

export default Fruit;