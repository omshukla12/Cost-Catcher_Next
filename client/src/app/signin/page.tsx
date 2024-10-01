import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../client'; // Adjust the path as needed

export default function Signin({ setToken }) {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        throw error;
      }

      console.log(data);
      setToken(data.session.access_token); // Store token using the prop
      router.push('/app'); // Redirect to the app page
    } catch (error) {
      console.error(error.message);
      alert("Failed to sign in. Please check your credentials.");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
