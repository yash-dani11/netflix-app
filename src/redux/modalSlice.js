import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name:"modal",
    initialState:{
        viewModal:false,
        details:{},
        category:"",
    },
    reducers:{
        viewModal:(state,action)=>{
            state.viewModal = true;
            state.details = action.payload?.details;
            state.category = action.payload?.category;
        },
        closeModal:(state)=>{
            state.viewModal = false;
        }
    }
})


export const {viewModal,closeModal} = modalSlice.actions;

export default modalSlice.reducer;
