import axios from  "axios";
import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(()=>{
   async function getUser(){
   try {
  const response =await axios.get('/user?ID12345')
  console.log(response);
    }catch(error)
    console.log(error)
   }


  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
