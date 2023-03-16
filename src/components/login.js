import React,{useContext, useState} from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/context';
import { cookies } from '../App';

function Login() {

    const[username,setUsername] =useState('')
    const[password,setPassword] =useState('')
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
   



    const onSubmitFormHandler = async(e)=>{
        e.preventDefault()
        try{
            const body = { username,password }
             fetch("http://localhost:5000/login",{
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body:JSON.stringify(body)
            }).then(
              response => response.json()
            ).then(
              data =>{
                setIsLoggedIn(data)
                cookies.set("jwt",data.token)
              }
            )
            
        }catch (err){
          console.error(err.message)
        }
       }
       console.log(isLoggedIn)
    return (
        <>
        <h1>this is login</h1>
        {isLoggedIn && <h1>{isLoggedIn.name}</h1>}

        <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="username">name</label>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" />
        <label htmlFor="password">password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" />
        <button>post</button>
      </form>


      <Link to={'/signup'}>Signup</Link>
        </>
    )
}

export default Login
