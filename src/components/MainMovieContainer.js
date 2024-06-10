import React from 'react'
import VideoBackground from './VideoBackground'
import VideoDetails from './VideoDetails'
import { useSelector } from 'react-redux'
const MainMovieContainer = () => {
  const nowPlayingMovies = useSelector(store=>store.movies?.nowPlayingMovies);
  const mainMovie = nowPlayingMovies[nowPlayingMovies?.length-1];
  return (
    <div>
        {mainMovie && <>
        <VideoDetails title={mainMovie?.original_title} desc={mainMovie?.overview}></VideoDetails><VideoBackground movieId = {mainMovie?.id}></VideoBackground></>}
    </div>
  )
}

export default MainMovieContainer