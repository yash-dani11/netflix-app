import { useState } from "react";
import useValidate from "../utils/useValidate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const {formData,dispatchForm} = useValidate();
  const inputErrorClass = "border border-red-600";
  const formTitle = isSignInForm ? "Sign In" : "Sign Up";
  const toggleSignIn = () => {
    setIsSignInForm((prev) => !prev);
    dispatchForm({type:"clear"});
  };
  const handleLogin = (event)=>{
    event.preventDefault();
    if(isSignInForm && !formData.email.error && !formData.password.error){
        console.log("Sign In Successful");
    }else if(!formData.email.error && !formData.password.error && !formData.name.error && !formData.confirmPassword.error){
        console.log("Sign Up Successful");
    }
  }
  return (
    <div className="w-screen bg-cover h-screen bg-center bg-movie-poster ">
      <div className="flex justify-center items-center h-[100%] p-10">
        <form className="w-4/5 h-5/6 text-white bg-black flex justify-center items-center bg-opacity-80 rounded-lg md:w-1/3">
          <div className="w-3/4 ">
            <h1 className="font-bold text-3xl mx-2 mt-2 mb-4">{formTitle}</h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Name"
                className={`p-4 mt-2 mb-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black ${formData["name"].error?inputErrorClass:""}`}
                onBlur = {(e)=>{dispatchForm({type:"name",value:e.target.value})}}
              ></input>
            )}
            { formData.name.error &&<div className="text-red-600 text-xs px-4">Please enter a name.</div>}
            <input
              type="text"
              placeholder="Email"
              className={`p-4 mt-2 mb-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black ${formData["email"].error?inputErrorClass:""}`}
              onBlur = {(e)=>{dispatchForm({type:"email",value:e.target.value})}}
            ></input>
            { formData.email.error &&<div className="text-red-600 text-xs px-4">Please enter a valid email address.</div>}
            <input
              type="password"
              placeholder="Password"
              className={`p-4 my-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black ${formData["password"].error?inputErrorClass:""}`}
              onBlur = {(e)=>{dispatchForm({type:"password",value:e.target.value})}}
            ></input>
            {formData.password.error && <div className="text-red-600 text-xs px-4">Your password must contain between 4 and 60 characters.</div>}
            {!isSignInForm && (
              <input
                type="password"
                placeholder="Confirm password"
                className="p-4 my-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black"
                onBlur = {(e)=>{dispatchForm({type:"confirmPassword",value:e.target.value})}}
              ></input>
             
            )}
             {formData.confirmPassword.error && <div className="text-red-600 text-xs px-4">The passwords do not match.</div>}
            <button className={`my-4 mx-2 p-4 bg-red-600 rounded-lg w-[100%]`} onClick={handleLogin}>
              {formTitle}
            </button>
            <p className="my-4 p-4">
              {isSignInForm ? "New to Netflix?" : "Already a user?"}
              <span className="font-bold cursor-pointer" onClick={toggleSignIn}>
                {" "}
                {isSignInForm ? "Sign Up now." : "Sign In instead."}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
