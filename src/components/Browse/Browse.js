import { useSelector } from 'react-redux';
import useMovies from '../../hooks/useMovies';
import { nowPlaying, popular, topRated, upcoming } from '../../utils/constants';
import ListContainer from './Home/ListContainer';
import MainMovieContainer from './Home/MainMovieContainer';
import Search from './Search/Search';
import Modal from './Details/Modal';
const Browse = () => {
  useMovies(nowPlaying);
  useMovies(topRated);
  useMovies(popular);
  useMovies(upcoming);
  const viewSearch = useSelector(store=>store.search?.viewSearch);
  const viewModal = useSelector(store=>store?.modal?.viewModal);
  return (
    <div className='bg-black text-white'>
      {viewSearch?<Search></Search>:<><MainMovieContainer></MainMovieContainer>
      <ListContainer></ListContainer></>}
      {viewModal && <Modal></Modal>}
    </div>
  )
}

export default Browse