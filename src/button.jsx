import React from "react";
import { Link } from "react-router-dom";
import './style.css';



const Buttons = () => {

    return(
        <div className="flex gap-3 h-screen justify-center items-center bg-teal-200">
            <div className="rounded-2xl flex gap-3 justify-center items-center shadow-2xl p-3 h-[25%]">
                <button className="px-5 py-2 mt-2 rounded-[6px] bg-green-400" >
                        <Link to='/login'>
                            login
                        </Link>
                        </button>

                <button className="px-5 py-2 mt-2 rounded-[6px] bg-green-400" >
                        <Link to='/register'>
                            Sign up
                        </Link>
                        </button>
            </div>
        </div>
    )
}

export default Buttons
