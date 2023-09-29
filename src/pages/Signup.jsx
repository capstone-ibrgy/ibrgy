import React, { useState } from "react";

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

function Signup() {
  const [click, setClick] = useState(0)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password).then((value)=> {
      console.log(value)
    })
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Email</label>
        <input className="border-2 border-black" value={email} onChange={ (e) => {
          setEmail(e.target.value)
        } } ></input>
        <label>Password</label>
        <input className="border-2 border-black" value={password} onChange={ (e) => {
          setPassword(e.target.value)
        }} type="password"></input>

        <input type='submit' className="mt-4 w-full h-8 border border-black"></input>
      </form>
    </div>
  );
}

export default Signup;
