import React from 'react'
import MovieCarousel from './MovieCarousel'
import { useSelector } from 'react-redux'

const ListContainer = () => {
  const movies = useSelector(store=>store.movies?.movieList);
  const allCategories = Object.keys(movies);
  console.log(allCategories);
  const allMovies = allCategories.map(category=><MovieCarousel movieList = {movies[category]} title={category} key={category}></MovieCarousel>)
  return (
    <div className='bg-transparent'>
      <div className='-mt-44'>{allMovies}</div>
    </div>
  )
}

export default ListContainer