import { useState } from "react";
import useInput from "../hooks/useInput";
import useValidate from "../hooks/useValidate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [loginError,setLoginError] = useState("");
  const {formData,dispatchForm} = useInput();
  const {formError,dispatchValidate,formHasErrors} = useValidate();
  const inputErrorClass = "border border-red-600";
  const formTitle = isSignInForm ? "Sign In" : "Sign Up";
  const {email,name,password,confirmPassword} = formData;
  const toggleSignIn = () => {
    setIsSignInForm((prev) => !prev);
  };
  const handleLogin = async (event)=>{
    event.preventDefault();
    if(formHasErrors(formData,isSignInForm)){
      return;
    }
    if(isSignInForm){
       try{
          await signInWithEmailAndPassword(auth,email,password);
          navigate("/browse");
          setLoginError("");
       }catch(error){
          if(error.code === "auth/invalid-credential"){
            setLoginError("Invalid Email/ Password");
          }
          else{
            setLoginError("Unable to Login");
          }
       }
    }
    else{
      try {
        await createUserWithEmailAndPassword(auth,email,password);
        await updateProfile(auth.currentUser, {displayName: name})
        const {currentUser} = auth;
        dispatch(addUser({uid:currentUser.uid,email:currentUser.email,displayName:currentUser.displayName}));      
        navigate("/browse");
        setLoginError("");

      } catch (error) {
          if(error.code === "auth/email-already-in-use"){
            console.log(error.code);
            setLoginError("Email is already in use");
          }
          else{
            setLoginError("Unable to Sign Up");
          }
      }
    }
        
  }
  return (
    <div className="w-screen bg-cover h-screen bg-center bg-movie-poster ">
      <div className="flex justify-center items-center h-[100%] p-10">
        <form className="w-[100%] h-5/6 text-white bg-black flex justify-center items-center bg-opacity-80 rounded-lg sm:w-4/5 md:w-1/3">
          <div className="w-3/4 ">
            <h1 className="font-bold text-3xl mx-2 mt-2 mb-4">{formTitle}</h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Name"
                className={`p-4 mt-2 mb-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black ${formData["name"].error?inputErrorClass:""}`}
                onChange = {(e)=>{dispatchForm({type:"name",value:e.target.value})}}
                onBlur = {()=>{dispatchValidate({type:"name",value:name})}}
                value={name}
              ></input>
            )}
            { formError.name &&<div className="text-red-600 text-xs px-4">Please enter a valid name.</div>}
            <input
              type="text"
              placeholder="Email"
              className={`p-4 mt-2 mb-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black ${formData["email"].error?inputErrorClass:""}`}
              onChange = {(e)=>{dispatchForm({type:"email",value:e.target.value})}}
              onBlur = {()=>{dispatchValidate({type:"email",value:email})}}
              value={ email}
            ></input>
            { formError.email &&<div className="text-red-600 text-xs px-4">Please enter a valid email address.</div>}
            <input
              type="password"
              placeholder="Password"
              className={`p-4 my-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black ${formData["password"].error?inputErrorClass:""}`}
              onChange = {(e)=>{dispatchForm({type:"password",value:e.target.value})}}
              onBlur = {()=>{dispatchValidate({type:"password",value:password,confirmPassword:confirmPassword})}}
              value={password}

            ></input>
            {formError.password && <div className="text-red-600 text-xs px-4">Your password must contain between 4 and 60 characters.</div>}
            {!isSignInForm && (
              <input
                type="password"
                placeholder="Confirm password"
                className="p-4 my-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black"
                onChange = {(e)=>{dispatchForm({type:"confirmPassword",value:e.target.value})}}
                onBlur = {()=>{dispatchValidate({type:"confirmPassword",value:confirmPassword,password:password})}}
                value={confirmPassword}
              ></input>
             
            )}
             {formError.confirmPassword && <div className="text-red-600 text-xs px-4">The passwords do not match.</div>}
            <button className={`my-4 mx-2 p-4 bg-red-600 rounded-lg w-[100%]`} onClick={handleLogin}>
              {formTitle}
            </button>
            {loginError && <div className="text-red-600 text-sm px-4">{loginError}</div>}
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
