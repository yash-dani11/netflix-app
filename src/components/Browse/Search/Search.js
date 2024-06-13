import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestions from './MovieSuggestions'

const Search = () => {
  return (
    <div className='h-screen w-screen bg-black bg-opacity-80'>
        <SearchBar></SearchBar>
        <MovieSuggestions></MovieSuggestions>
    </div>
  )
}

export default Search