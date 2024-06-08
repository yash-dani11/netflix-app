import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm((prev) => !prev);
  };
  const handleInput = () =>{

  }
  const formTitle = isSignInForm ? "Sign In" : "Sign Up";
  return (
    <div className="w-screen bg-cover h-screen bg-center bg-movie-poster">
      <div className="flex justify-center items-center h-[100%]">
        <form className="w-1/3 h-5/6 text-white bg-black flex justify-center items-center bg-opacity-80 rounded-lg">
          <div className="w-3/4">
            <h1 className="font-bold text-3xl mx-2 mt-2 mb-4">{formTitle}</h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Name"
                className="p-4 mt-2 mb-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black"
                onBlur = {(e)=>{handleInput("name",e.target.value)}}
              ></input>
            )}
            <input
              type="text"
              placeholder="Email or mobile number"
              className="p-4 mt-2 mb-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="p-4 my-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black"
            ></input>
            {!isSignInForm && (
              <input
                type="password"
                placeholder="Confirm password"
                className="p-4 my-4 mx-2 rounded-lg w-[100%] bg-gray-700 focus:outline-black"
              ></input>
            )}
            <button className="my-4 mx-2 p-4 bg-red-600 rounded-lg w-[100%]">
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
