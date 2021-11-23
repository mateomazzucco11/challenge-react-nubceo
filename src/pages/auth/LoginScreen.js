import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
  const navigate = useNavigate()
  const [ error, setError ] = useState()

  const initialForm = {
    email: "",
    password: "",
  }

  const [ values, handleInputChange ] = useForm(initialForm)
  // Here I am going to send to localStorage in writing. Since I do not have the api.
  const handleSubmit = (e) => {
    e.preventDefault()

    if( values.email === "challengereact@nubceo.com" && values.password === "react1234" ) {
      setError()
      localStorage.setItem("access_token", "321sfasd34213s2123afs2")
      setTimeout(()=>{ navigate("/") }, 500)
      return
    } else {
      setError("The email or password entered is incorrect")
      return
    }
  }

  return (
    <form>
      <input 
        type="email"
        placeholder="test@gmail.com"
        name="email"
        value={values.email}
        onChange={handleInputChange}
      />
      <input 
        type="password"
        placeholder="******"
        name="password"
        value={values.password}
        onChange={handleInputChange}
      />
      <button type="button" onClick={(e) => handleSubmit(e)}>Login</button>
      {
        error === undefined ? null : (
          <h1>{error}</h1>
        )
      }
    </form>
  )
}
