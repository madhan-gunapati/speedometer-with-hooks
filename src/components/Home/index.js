import { useState } from "react"

const Home = ()=>{
    const [speed , setSpeed] = useState(50);
    
    function Accelerate(){
        if(speed+10 <=120){
        setSpeed((p)=>p+10);
        }
        
    }

    function Brake(){
        if(speed - 10 >=0){
            setSpeed((p)=>p-10)
        }
    }

    return <div>
                 <h1>SPEEDOMETER</h1>
                <h3>Your speed is {speed} kms</h3>
                <p>Min Limit is 0 kmph and MAx limit is 120 kmph</p>
                <div>
                    <button type='button' onClick={Accelerate}>Accelerate</button>
                    <button type='button' onClick={Brake}>Apply brake</button>
                </div>
             </div>
}

export default Home