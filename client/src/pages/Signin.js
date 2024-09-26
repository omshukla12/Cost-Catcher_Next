
import React from 'react'
import { useState } from 'react'
import { supabase } from './client'
import { useNavigate } from 'react-router-dom'
import app from './App'

const Signin = (setToken) => {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    console.log(formData);

    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signInWithPassword(
                {
                    email: formData.email,
                    password: formData.password,
                }
            )

            console.log(data)
            // setToken();
            navigate("/app");
            
            // alert("Check email for verification link")
        } catch (error) {
            alert(error)
        } 
    }

  return (
      //   <div>Signup</div>
      <div>
        <form onSubmit={handleSubmit}>
              <input
                  placeholder="Email"
                  name='email'
                  onChange={handleChange}
              />
              <input
                  placeholder="Password"
                  name='password'
                  onChange={handleChange}
              />
              <button type='Submit'>Submit</button>
              <p>Don't have an account? <a href='/signup'>Signup</a></p>
        </form>
      </div>
  )
}

export default Signin;
