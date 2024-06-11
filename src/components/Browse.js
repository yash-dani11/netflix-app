import useMovies from '../hooks/useMovies';
import { nowPlaying, popular, topRated, upcoming } from '../utils/constants';
import ListContainer from './ListContainer';
import MainMovieContainer from './MainMovieContainer';
const Browse = () => {
  useMovies(nowPlaying);
  useMovies(topRated);
  useMovies(popular);
  useMovies(upcoming);

  return (
    <div className='bg-black text-white'>
      <MainMovieContainer></MainMovieContainer>
      <ListContainer></ListContainer>
    </div>
  )
}

export default Browse