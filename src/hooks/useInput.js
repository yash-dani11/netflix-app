import { useReducer } from "react";

const useInput = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleInput = (state, action) => {
    let updatedState = { ...state };
    updatedState[action.type] = action.value;
    return updatedState;
  };

  const [formData, dispatchForm] = useReducer(handleInput, initialState);
  return { formData, dispatchForm };
};

export default useInput;
