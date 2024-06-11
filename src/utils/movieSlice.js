import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        movieList:{},
        mainTrailerVideo:null,
    },
    reducers:{
        addNowMovies:(state,action)=>{
            state["movieList"][action.payload.key] = action.payload.data;
        },
        addTrailerVideo:(state,action)=>{
            state.mainTrailerVideo = action.payload;
        }
    }
})

export const {addNowMovies: addMovies,addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;
