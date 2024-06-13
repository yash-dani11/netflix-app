import React from 'react'
import MovieCarousel from './MovieCarousel'
import { useSelector } from 'react-redux'

const ListContainer = () => {
  const movies = useSelector(store=>store.movies?.movieList);
  const allCategories = Object.keys(movies);
  const allMovies = allCategories.map(category=><MovieCarousel movieList = {movies[category]} title={category} key={category}></MovieCarousel>)
  return (
    <div className='bg-transparent relative z-20'>
      <div className='-mt-52'>{allMovies}</div>
    </div>
  )
}

export default ListContainer