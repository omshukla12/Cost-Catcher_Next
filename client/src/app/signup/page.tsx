import React, { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from './client';

interface FormData {
    name: string;
    email: string;
    password: string;
}

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: ""
    });

    console.log(formData);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        name: formData.name
                    }
                }
            });

            alert("Check email for verification link");
        } catch (error) {
            alert(error);
        }
    }

    return (
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
                <button type='submit'>Submit</button>
                <p>Already have an account? <a href='/signin'>Login</a></p>
            </form>
        </div>
    );
}

export default Signup;

