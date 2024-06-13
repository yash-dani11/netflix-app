import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name:"header",
    initialState:{view:true},
    reducers:{
        hideHeader:(state)=>{
            state.view = false; 
        },
        showHeader:(state)=>{
            state.view = true
        }
    }
})

export const {hideHeader,showHeader} = headerSlice.actions;

export default headerSlice.reducer;