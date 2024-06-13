import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMovies } from '../redux/movieSlice';
import { MOVIES_ENDPOINT,TMDB_API_OPTIONS } from '../utils/constants';
const useMovies = (category) => {
    const dispatch = useDispatch();
    const movies = useSelector(store=>store.movies?.movieList?.[category]);
    useEffect(()=>{
      const fetchMovies = async()=>{
        try {
          const response = await fetch(`${MOVIES_ENDPOINT}${category}`,TMDB_API_OPTIONS);
          if(!response.ok){
            throw new Error("Unable to fetch Movies");
          }  
          const json = await response.json();
          dispatch(addMovies({data:json.results,key:category}));
          
        } catch (error) {
            console.log(error);
        }
      }
      if(!movies){
        fetchMovies();
      }
    },[]);
}

export default useMovies