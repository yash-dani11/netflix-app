import React from 'react'
import VideoBackground from './VideoBackground'
import VideoDetails from './VideoDetails'
import { useSelector } from 'react-redux'
import { nowPlaying } from '../utils/constants'
const MainMovieContainer = () => {
  const nowPlayingMovies = useSelector(store=>store.movies?.movieList[nowPlaying]);
  if(!nowPlayingMovies){
    return;
  }
  let nowPlayingKeys = Object.keys(nowPlayingMovies);
  const mainMovie = nowPlayingMovies[nowPlayingKeys[0]];
  return (
    <div>
        {mainMovie && <>
        <VideoDetails title={mainMovie?.original_title} desc={mainMovie?.overview} category={nowPlaying} id={mainMovie.id}></VideoDetails><VideoBackground movieId = {mainMovie?.id}></VideoBackground></>}
    </div>
  )
}

export default MainMovieContainer