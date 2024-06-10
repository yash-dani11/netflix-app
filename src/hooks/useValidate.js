import { useReducer } from "react";
const useValidate = () => {
  const initialState = {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  };
  const validateReducer = (state, action) => {
    let updatedState = { ...state };
    switch (action.type) {
      case "name":
        updatedState["name"] = !(/^[a-z ,.'-]+$/i.test(action.value));
        break;
      case "email":
        updatedState["email"] = !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(action.value));
        break;
      case "password":
        updatedState["password"] =
          !(action.value.length >= 4 && action.value.length <= 60);
        if(action.confirmPassword){
            updatedState["confirmPassword"] = action.value !== action.confirmPassword;    
        }
        break;
      case "confirmPassword":
        updatedState["confirmPassword"] = action.value !== action.password;
        break;
     case "submit":
        Object.entries(action.value).forEach(([key,value])=>{
            updatedState[key] = value;
        })
        break;
      default:
        return initialState;
    }
    return updatedState;
  };

  const formHasErrors = (formData,isSignInForm)=>{
    let errors = {
        email:!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(formData.email)),
        password: !(formData.password.length >=4 && formData.password.length<=60),
    }
    if(!isSignInForm){
        errors.name = !(/^[a-z ,.'-]+$/i.test(formData.name));
        errors.confirmPassword = formData.password !== formData.confirmPassword;
    }
    dispatchValidate({type:"submit",value:errors});
    return Object.values(errors).some(error=>error);
  }
  const [formError, dispatchValidate] = useReducer(validateReducer, initialState);
  return { formError, dispatchValidate,formHasErrors };
};

export default useValidate;
