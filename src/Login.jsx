import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './style.css';


const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

             const response = await axios.post ('https://signup-page-backend.onrender.com/login', { email, password });
            const user = response.data;
            navigate('/home', {state: { user }});
                             
            
        } catch(error){
            console.log(err);
        }
       
    };
    console.log("SamUel");

    return(
        <div className="h-screen flex items-center justify-center bg-blue-400 text-white">
            <div className="text-center shadow-2xl rounded-2xl p-8">
                <h2 className="text-4xl font-bold">Login</h2>
                <form onSubmit={handleSubmit}>
                
                <div className="flex flex-col gap-2 justify-center" >
                    <div className="text-left flex flex-col">

                        <label htmlFor="email">
                            <strong>Email :</strong>
                        </label>

                        <input
                            className="border-2 rounded-[6px] pl-3 w-[100%]"
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            autoComplete="on"
                            onChange={((e) => setEmail(e.target.value))}
                        />
                        
                    </div>

                    <div className="text-left flex flex-col">
                        <label htmlFor="email">
                            <strong>Password :</strong>
                        </label>
                        <input
                            className="border-2 rounded-[6px] pl-3 w-[100%]"
                            type="passord"
                            placeholder="Password"
                            autoComplete="on"
                            name="email"
                            onChange={((e) => setPassword(e.target.value))}
                        />
                    </div>

                    <div className="text-center justify-self-start">
                    <button className="px-4 py-1 mt-2 rounded-[6px] bg-green-400" type="submit">
                        Login
                    </button>
                    </div>

                </div>

                    
                </form>
                <div className="flex flex-col gap-3 mt-3">
                    <p>Don't have an account</p>
                    <button className="px-4 py-1 mt-2 rounded-[6px] bg-green-400" >
                    <Link to='/register'>
                        Sign up
                    </Link>
                    </button>
                </div>

                
            </div>
        </div>
    )
}

export default Login;