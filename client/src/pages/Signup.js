
import React from 'react'
import { useState } from 'react'
import { supabase } from './client'

const Signup = () => {

    const [formData, setFormData] = useState({
        name: "",
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
            const { data, error } = await supabase.auth.signUp(
                {
                    email: formData.email,
                    password: formData.password,
                    options: {
                        data: {
                            name: formData.name
                        }
                    }
                }
            )
            
            alert("Check email for verification link")
        } catch (error) {
            alert(error)
        } 
    }

  return (
      //   <div>Signup</div>
      <div>
        <form onSubmit={handleSubmit}>
              <input
                  placeholder="Name"
                  name='name'
                  onChange={handleChange}
              />
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
              <p>Already have an account? <a href='/signin'>Login</a></p>
        </form>
      </div>
  )
}

export default Signup
