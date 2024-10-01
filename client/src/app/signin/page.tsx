import React, { ChangeEvent, FormEvent, useState } from 'react';
import { supabase } from './client';
import { useNavigate, useOutletContext } from 'react-router-dom';

interface FormData {
    email: string;
    password: string;
}

const Signin: React.FC = () => {
    let navigate = useNavigate();
    const { setToken } = useOutletContext<{ setToken: (token: string) => void }>(); // Get setToken from the context

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
            setToken(data.session.access_token);  // Store token in parent state
            navigate("/app");
        } catch (error: any) {
            console.error(error.message);
            alert("Failed to sign in. Please check your credentials.");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    placeholder="Password"
                    name='password'
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
                <p>Don't have an account? <a href='/signup'>Signup</a></p>
            </form>
        </div>
    );
}

export default Signin;

