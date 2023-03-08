import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/context";

function Signup() {
   const[username,setUsername] =useState('')
   const[password,setPassword] =useState('')
   const[email,setEmail] =useState('')
const{isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
   const onSubmitFormHandler = async(e)=>{
    e.preventDefault()
    try{
        const body = { username,password,email }
         fetch("http://localhost:5000/signup",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(body)
        }).then(
          response => response.json()
        ).then(
          data =>{setIsLoggedIn(data)}
        )
        
    }catch (err){
      console.error(err.message)
    }
   }
   console.log(isLoggedIn)
  return (
    <>
      <h1>this is signup</h1>
      <h1>{ isLoggedIn ? isLoggedIn.name : 'Name'}</h1>

      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="username">name</label>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" />
        <label htmlFor="password">password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" />
        <label htmlFor="email">email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" />
        <button>post</button>
      </form>
      <Link to={'/login'}>Login</Link>
    </>
  );
}

export default Signup;
