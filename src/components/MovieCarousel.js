import React from 'react'
import MovieCard from './MovieCard'

const MovieCarousel = ({movieList,title}) => {
    const movies = movieList?.map(movie=><MovieCard details = {movie} key={movie.id}></MovieCard>);
    let movieTitle = title?.replaceAll("_"," ");
  return (
    <div className='px-12 py-6'><h1 className='text-2xl capitalize'>{movieTitle}</h1>
    <div className='flex overflow-x-scroll mt-2'>
    <div className='mt-2 flex justify-around'>{movies}</div>
    </div>
    </div>
  )
}

export default MovieCarousel