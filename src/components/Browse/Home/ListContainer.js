import React from 'react'
import MovieCarousel from '../../MovieCarousel/MovieCarousel'
import { useSelector } from 'react-redux'

const ListContainer = () => {
  const movies = useSelector(store=>store.movies?.movieList);
  const allCategories = Object.keys(movies);
  const allMovies = allCategories.map(category=><MovieCarousel movieList = {movies[category]} title={category} key={category}></MovieCarousel>)
  return (
    <div className='pt-72 bg-black md:bg-transparent md:relative md:z-20 md:m-auto md:pt-0'>
      <div className='tab:-mt-52'>{allMovies}</div>
    </div>
  )
}

export default ListContainer