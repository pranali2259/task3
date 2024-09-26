import {useEffect, useState, useTransition } from 'react'

import './App.css'


import React from 'react'

const App = () => {
const [age,setage]=useState('23');
  let val = "Hii"

  const [initaialVal , setinitaialVal] = useState("pranali")
 

  const change =()=>{
let val1 = "pranali"

if (val1 === initaialVal){
  setinitaialVal("Helloz Pranali")
}else{
  setinitaialVal("pranali")
}
    
  }

  return (
   <>
   <h1>{val} : {initaialVal}</h1>
   <button onClick={change}> Click</button>

   <br/>
   <br />
   <Color/>
   <br />
   <Input/>
    
   </>
  )
}

const Color = () => {
  const [color, setColor] = useState('#000000');

  const RandomColor = () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      setColor(`#${randomColor}`);
  };
  return (
      <div>
          <div 
              style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: color,
                  margin: '0 auto',
                  border: '1px solid #000'
              }}
          />
          <h2>Color: {color}</h2>
          <button onClick={RandomColor}>Color</button>
      </div>
  );
};

const Input=()=>{
  const[text,setText]=useState("");
  function Change1(e){
     setText(e.target.value);  
     
  }
  return(
    <>
    <input type="text" value={text} onChange={Change1} />
    <p>you entered: {text}</p>
    <button onClick={()=> setText("")} >reset</button>
    </>
  )
    };
    
export default App
