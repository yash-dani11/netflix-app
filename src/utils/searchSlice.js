import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice(
    {
        name:"search",
        initialState:{
            viewSearch:false,
            loading:false,
        },
        reducers:{
            toggleSearchView:(state)=>{
                state.viewSearch = !state.viewSearch;
            },
            toggleLoading:(state)=>{
                state.loading = !state.loading
            }
        }
    }
)

export const {toggleSearchView,toggleLoading} = searchSlice.actions;

export default searchSlice.reducer;