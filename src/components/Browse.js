import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import ListContainer from './ListContainer';
import MainMovieContainer from './MainMovieContainer';
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className='bg-black h-screen w-screen'>
      <MainMovieContainer></MainMovieContainer>
      <ListContainer></ListContainer>
    </div>
  )
}

export default Browse