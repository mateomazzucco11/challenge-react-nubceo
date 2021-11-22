import React from 'react'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
  const initialForm = {
    email: "",
    password: "",
  }

  const [ values, handleInputChange ] = useForm(initialForm)
  
  const handleSubmit = () => {
    
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
      <button type="submit" onSubmit={handleSubmit}>Login</button>
    </form>
  )
}
