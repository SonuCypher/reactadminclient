import React from 'react'
import{ Link }from 'react-router-dom'
import {useEffect,useState} from 'react'
function Home() {

  const [backendData,setBackendData] = useState([{}])

 useEffect(()=>{
   fetch("/signup").then(
     response => response.json()
  ).then(
     data => {
       setBackendData(data);
     }
   )
 },[])

    return (
        <>
        <h1>Home</h1>
        {backendData.map(user=><h3>{user.name}</h3>)}
        <p>
            <Link>click here</Link>
        </p>
        </>
    )
}

export default Home
