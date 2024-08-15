'use client'
import { useState } from "react";
import ResturantLogin from "../_components/resturantLogin";
import ResturantSignUp from "../_components/resturantSigUp";

const Resturant = () => {
    const [login, setLogin] = useState(true);
  return (
    <div>
        Resturant Login/SignUp
        <div>
            {
                login ? <ResturantLogin/> :  <ResturantSignUp/>
            }
        </div>
        
       
    </div>
  )
}

export default Resturant;