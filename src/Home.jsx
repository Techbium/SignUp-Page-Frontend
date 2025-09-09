import React from "react";
import { useLocation } from "react-router-dom";
import './style.css';

const Home = () =>{

    const location = useLocation();
    const {user} = location.state || {};
    
    return(
 
        <div className="flex items-center justify-center h-screen ">  
            <h3 className="text-5xl">Welcome { user } </h3>
        </div>

    )
}

export default Home;