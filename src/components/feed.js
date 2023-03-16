import React from 'react'
import {useEffect,useContext} from 'react'
import { AuthContext } from '../context/context'
import jwt from "jwt-decode"
import { cookies } from '../App'
function Feed() {
    const{isLoggedIn,setIsLoggedIn}=useContext(AuthContext)

    useEffect(()=>{
       const auth = cookies.get('jwt')
        if (auth){
          const data = jwt(auth)
          setIsLoggedIn(data)
         }
      },[])

    return (
        <>
        <h1>{isLoggedIn.name}</h1>
        </>
    )
}

export default Feed

