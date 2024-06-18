import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../MovieCarousel/MovieCard';

const Similar = () => {
    const suggestions = useSelector(state=>state.movies?.movieList?.suggestion);
    if(!suggestions || suggestions.length){
        return;
    }
    const suggestionList = Object.values(suggestions)?.map((movie)=><MovieCard category={"suggestion"} details={movie} key={movie.id}></MovieCard>)
  return (
    <div className='m-3'><h1 className='text-3xl mt-3 text-center font-bold'>
        More Like This
    </h1>
        <div className='flex flex-wrap flex-col justify-center items-center sm:flex-row'>
            {suggestionList}
            </div></div>
  )
}

export default Similar