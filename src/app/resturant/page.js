"use client";
import { useState } from "react";
import ResturantLogin from "../_components/ResturantLogin";
import ResturantSignUp from "../_components/ResturantSigUp";
import ResturantHeader from "../_components/ResturantHeader";
import ResturantFooter from "../_components/ResturantFooter";

const Resturant = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="bg-orange-50">
      <ResturantHeader />
      <div className="bg-[url('https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/5feb2c2f49aff.jpeg')] bg-cover bg-center rounded-e-[40%]">
        <div className="flex p-10 items-center justify-center ">
          <div className="w-full max-w-md p-8 space-y-6 bg-orange-600 border rounded-lg shadow-lg">
            <div className="text-2xl font-extrabold text-center border-b-2 mb-10">
              Resturant Login/SignUp
            </div>
            <div>{login ? <ResturantLogin /> : <ResturantSignUp />}</div>
            <div className="text-center ">
              <button
                onClick={() => setLogin(!login)}
                className="underline text-[14px] decoration-blue-600 text-blue-600"
              >
                {login
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ResturantFooter/>
    </div>
  );
};

export default Resturant;
