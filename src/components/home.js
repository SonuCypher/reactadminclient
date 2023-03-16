import React, { useContext } from 'react'
import{ Link }from 'react-router-dom'
import {useEffect,useState} from 'react'
import { AuthContext } from '../context/context'
import jwt from "jwt-decode"
import { cookies } from '../App'
function Home() {

  const [userLogged,setUserLogged]=useState(false)
  const [backendData,setBackendData] = useState([{}])
  const{isLoggedIn,setIsLoggedIn}=useContext(AuthContext)

 useEffect(()=>{
    fetch("http://localhost:5000/signup").then(
      response => response.json()
   ).then(
      data => {
        setBackendData(data);
       //  console.log(data);
      }
    )
  // try {
  //   const response = await fetch("http://localhost:5000/signup");
  //   const data = await response.json();
  //   setBackendData(data);
  //   // console.log(data);
  // } catch (error) {
  //   console.log(error);
  // }
  const auth = cookies.get('jwt')
   if (auth){
     const data = jwt(auth)
     setIsLoggedIn(data)
    }
 },[])
 console.log(backendData)

    return (
        <>
        <h1>Home</h1>
        {isLoggedIn?<h2>{isLoggedIn.name}</h2>:<h2>guest</h2>}
        {userLogged && backendData.map(user=><h3>{user.name} id:{user.user_id}</h3>)}
        
        
        <button onClick={()=>setUserLogged(!userLogged)}>login</button>
        <p>
            <Link>click here</Link>
        </p>
        </>
    )
}

export default Home
