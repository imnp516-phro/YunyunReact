import {useState} from 'react';

function UpdARRAYinOBJ(){

    const[cars, setCars] = useState([]);
    const[carYear, setCarYear] = useState(new Date().getFullYear());;
    const[carMake, setCarMake] = useState("");
    const[carModel, setCarModel] = useState("");

    function handleYearChange(){

    }

    function handleMakeChange(){

    }

    function handleDayChange(){

    }

    return(<div>
             <h2>List Of Car Object </h2>

            <ul>
            
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/> <br/>
            <input type="text" value={carMake} onChange={handleMakeChange}  placeholder="Enter car make!"/> <br/>
            <input type="text" value={carModel} onChange={handleYearChange} placeholder="Enter car model!"/> <br/>

            <button> Add Car </button>
        </div>);


}


export default UpdARRAYinOBJ;
