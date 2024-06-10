import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { NOW_PLAYING_ENDPOINT,TMDB_API_OPTIONS } from '../utils/constants';
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      const fetchMovies = async()=>{
        try {
          const response = await fetch(NOW_PLAYING_ENDPOINT,TMDB_API_OPTIONS);
          if(!response.ok){
            throw new Error("Unable to fetch Movies");
          }  
          const json = await response.json();
          dispatch(addNowPlayingMovies(json.results));
          
        } catch (error) {
            console.log(error);
        }
      }
      fetchMovies();
    },[]);
}

export default useNowPlayingMovies