import React, { useState } from "react";

function Signup() {
   const[username,setUsername] =useState('')
   const[password,setPassword] =useState('')
   const onSubmitFormHandler = async(e)=>{
    e.preventDefault()
    try{
        
    }
   }
  return (
    <>
      <h1>this is signup</h1>

      <form>
        <label htmlFor="username">name</label>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" />
        <label htmlFor="password">password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" />
        <button>post</button>
      </form>
    </>
  );
}

export default Signup;
