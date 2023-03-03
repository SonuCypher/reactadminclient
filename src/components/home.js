import React from 'react'
import{ Link }from 'react-router-dom'
import {useEffect,useState} from 'react'
function Home() {

  const [userLogged,setUserLogged]=useState(false)
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
        {userLogged && backendData.map(user=><h3>{user.name} id:{user.user_id}</h3>)}
        
        
        <button onClick={()=>setUserLogged(!userLogged)}>login</button>
        <p>
            <Link>click here</Link>
        </p>
        </>
    )
}

export default Home
