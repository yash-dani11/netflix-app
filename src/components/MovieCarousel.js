import React from 'react'
import MovieCard from './MovieCard'

const MovieCarousel = ({movieList,title}) => {
    const movies = Object.values(movieList)?.map(movie=><MovieCard details = {movie} key={movie.id} category={title}></MovieCard>);
    let movieTitle = title?.replaceAll("_"," ");
  return (<>{movies.length>0 && <div className='px-12 py-3'><h1 className='text-2xl capitalize'>{movieTitle}</h1>
  <div className='flex overflow-x-scroll mt-2'>
  <div className='mt-2 flex justify-around'>{movies}</div>
  </div>
  </div>}</>
  )
}

export default MovieCarousel