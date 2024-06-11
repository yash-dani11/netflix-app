import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovies as addMovies } from '../utils/movieSlice';
import { MOVIES_ENDPOINT,TMDB_API_OPTIONS } from '../utils/constants';
const useMovies = (category) => {
    const dispatch = useDispatch();
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
      fetchMovies();
    },[]);
}

export default useMovies