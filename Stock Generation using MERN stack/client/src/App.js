



import './App.css';
import {useState} from 'react';


  function App() {
  const [nse,setNse]=useState(0);
  const [bse,setBse]=useState(0);


  async function generate(){

    const response=await fetch("http://localhost:1337/api/stock",{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:{
        nse,
        bse
      }

    })

    const data=await response.json();
    
    console.log(data)
    setNse(data.resu['NSE']);
    setBse(data.resu['BSE']);

  
}

  setInterval(generate,100000);

  return (
    <div className="App">
      <p>
        BSE:<span className="bse" id="bse">{bse}</span>
      </p>
      <p>
        NSE:<span className="nse" id="nse">{nse}</span>
      </p>
    </div>
  );
}

<input type="text" onClick="(e)=>{show(e.target.value);}"/>
export default App;
