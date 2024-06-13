import React from 'react'
import { useSelector } from 'react-redux'
import MovieCarousel from './MovieCarousel';
import LOADER from "../assets/loader.gif";
const MovieSuggestions = () => {
    const searchResults = useSelector(state=>state.movies?.searchList);
    const isLoading = useSelector(state=>state.search?.loading);
  return (
    <div className='-mt-32 bg-black'>
      {isLoading?<img src={LOADER} className="h-4 w-4 text mx-auto"></img>:<MovieCarousel movieList={searchResults} title="results"></MovieCarousel>}  
    </div>
  )
}

export default MovieSuggestions