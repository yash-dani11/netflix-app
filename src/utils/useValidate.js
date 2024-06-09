import { useReducer } from "react";

const useValidate = () => {

    const initialState = {
        name: { value: "", error: false },
        email: { value: "", error: false },
        password: { value: "", error: false },
        confirmPassword: { value: "", error: false },
      };
  const handleInput = (state, action) => {
    let updatedState = { ...state };
    switch (action.type) {
      case "email":
        {
          const match = action.value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
          if (match) {
            updatedState["email"] = match[0];
            updatedState["email"].error = false;
          } else {
            updatedState["email"].error = true;
          }
        }
        break;
      case "name":
        const match = action.value.match(/^[a-z ,.'-]+$/i);
        if (match) {
          updatedState["name"].value = match[0];
          updatedState["name"].error = false;
        } else {
          updatedState["name"].error = true;
        }

        break;
      case "password":
        if (action.value.length >= 4 && action.value.length <= 60) {
          updatedState["password"].value = action.value;
          updatedState["password"].error = false;
          if(updatedState["confirmPassword"].error && updatedState["confirmPassword"].value === action.value){
            updatedState["confirmPassword"].error = false;
          }
        } else {
          updatedState["password"].error = true;
        }

        break;
      case "confirmPassword":
        updatedState["confirmPassword"].value = action.value;
        if (updatedState.password.value !== action.value) {
          updatedState["confirmPassword"].error = true;
        }
        break;
      default:
        console.log(initialState);
        return initialState;

    }
    return updatedState;
  };


  const [formData, dispatchForm] = useReducer(handleInput, initialState);
  return { formData, dispatchForm };
};

export default useValidate;
