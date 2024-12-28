
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const[items,setItems]=useState([])

  useEffect(()=>{
    axios.get('/api/items')
    .then((Response)=>{
      setItems(Response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })


  return (
    <>
  <h1>Hello ji</h1>
  <p>ITEMS:{items.length}</p>
 
{
  
  
  items.map((item)=>(
    <div key={item.id}>
    <h3>
      {item.types}
    </h3>

    </div>

  ))
  
}

    </>
  )
}

export default App
