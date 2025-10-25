import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [jokes,setJokes]=useState([]);


useEffect(()=>{
  const fetchData= async ()=>{
   try{
     const res = await axios.get("/api/jokes");

    if(!res){
      console.log("data not found");
    }
    const data= res.data;
  
    setJokes(data);



    
   }
   catch{
    console.error("Data not fetched ");
   }
  }

  fetchData();

},[])




  return (
    <div>
      
<h1>Jokes is ready to serve</h1>

{
  jokes.map((joke,index)=>( 
       <div key={index}>
      <h3>{joke.setup}</h3>
      <p>{joke.punchline}</p>
    </div>

  ))
}

    </div>
  )
}

export default App
