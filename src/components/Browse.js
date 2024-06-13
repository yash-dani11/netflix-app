import { useSelector } from 'react-redux';
import useMovies from '../hooks/useMovies';
import { nowPlaying, popular, topRated, upcoming } from '../utils/constants';
import ListContainer from './ListContainer';
import MainMovieContainer from './MainMovieContainer';
import Search from './Search';
const Browse = () => {
  useMovies(nowPlaying);
  useMovies(topRated);
  useMovies(popular);
  useMovies(upcoming);
  const viewSearch = useSelector(store=>store.search?.viewSearch);
  return (
    <div className='bg-black text-white'>
      {viewSearch?<Search></Search>:<><MainMovieContainer></MainMovieContainer>
      <ListContainer></ListContainer></>}
    </div>
  )
}

export default Browse