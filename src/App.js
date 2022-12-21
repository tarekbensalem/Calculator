import './index.css'
import { useState } from 'react'
function App() {

  const i = () =>{
    const table =[]

    for (let i=1;i<10;i++){
        table.push(
            <button key={i}  onClick={()=> update(i)} >{i}</button>
        )
    } return table
  }
   
  const [calc,setCalc] = useState("");
  
  const update = (value) =>{
    
    setCalc(calc+value);
  }
  



  return (
    <div className="App">
      <div className="calculator">
          <div className="display" >
            {calc || 0} 
         </div>
         <div className='operators'>
      <button onClick={()=> update('/')}>/</button>
      <button onClick={()=> update('*')}>*</button>
    <button onClick={()=> update('+')}>+</button>
    <button onClick={()=> update('-')}>-</button>
    <button onClick={()=> setCalc("")} >delete</button>
    </div>
    <div className='number' >
      {i() }
      <button onClick={()=> update('0')}>0</button>
      <button onClick={()=> update('.')}>.</button>
      <button onClick={()=>{}}>=</button>
      
    </div>

    </div>
    </div>
  );
}

export default App;
