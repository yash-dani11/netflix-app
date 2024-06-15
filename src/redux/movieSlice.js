import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        movieList:{},
        trailerList:{},
        searchList:{},
        castList:{},
    },
    reducers:{
        addMovies:(state,action)=>{
            let movieData = {}
            action.payload.data.forEach(element => {
                movieData[element.id] = element;
            });
            state["movieList"][action.payload.key] = movieData;
        },
        addTrailerVideo:(state,action)=>{
            state["trailerList"][action.payload.category]= {};
            state["trailerList"][action.payload.category][action.payload.movieId] = action.payload.value;
        },
        addSearchResults:(state,action)=>{
            let movieData = {};
            action.payload.forEach(element => {
                movieData[element.id] = element;
            });
            state["searchList"] = movieData;
        },
        addMovieCast:(state,action)=>{
            state["castList"][action.payload.movieId] = action.payload.value;
        }
    }
})

export const { addMovies,addTrailerVideo,addSearchResults,addMovieCast} = movieSlice.actions;

export default movieSlice.reducer;
