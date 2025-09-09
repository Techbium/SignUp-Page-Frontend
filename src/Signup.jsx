import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Sam");
             const response = await axios.post ('https://sign-up-page-backend.vercel.app/register', {name, email, password })
                console.log(response.data);
                console.log("SamP");
                navigate('/login');
            
        } catch(error){
            console.log(error);
        }
       
    }

    

    return(
        
        <div className="h-screen flex items-center justify-center bg-blue-400 text-white">
            <div className="text-center shadow-2xl rounded-2xl p-8">
                <h2 className="text-4xl font-bold">Register</h2>
                <form onSubmit={handleSubmit}>

                <div className="flex flex-col gap-2 justify-center" >
                        <div className="text-left flex flex-col">
                            
                            <label htmlFor="email">
                                <strong>Name</strong>
                            </label>
                            
                            <input className="border-2 rounded-[6px] pl-3 w-[100%]"
                            type="text"
                            placeholder="Enter name"
                            name = "email"
                            autoComplete="on"
                            onChange={((e) => setName(e.target.value))}
                            />
                        </div>

                        <div className="text-left flex flex-col">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input className="border-2 rounded-[6px] pl-3"
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                autoComplete="on"
                                onChange={((e) => setEmail(e.target.value))}
                            />
                        </div>

                        <div className="text-left flex flex-col">
                            <label>
                                <strong>Password :</strong>
                            </label>
                            <input className="border-2 rounded-[6px] pl-3"
                                type="passord"
                                placeholder="Password"
                                autoComplete="on"
                                name="email"
                                onChange={((e) => setPassword(e.target.value))}
                            />
                        </div>

                        <div className="text-center justify-self-start">
                            <button className="px-4 py-1 mt-2 rounded-[6px] bg-green-400" type="submit">
                                Register
                            </button>
                        </div>

                </div>
                </form>

                <div className="flex flex-col gap-3 mt-3">
                    <p>Already have an account</p>
                    <button className="px-4 py-1 mt-2 rounded-[6px] bg-green-400" >
                        <Link to='/login'>
                            Login
                        </Link>
                    </button>
                </div>

            </div>   
        </div>
        
    )
}

export default Signup;