import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MOVIES_ENDPOINT, TMDB_API_OPTIONS,CREDITS_API } from '../utils/constants';
import { addMovieCast } from '../redux/movieSlice';

const useCast = (movieId) => {
  const cast = useSelector(store=>store.movies?.castList?.[movieId]);
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchCast = async()=>{
        try {
            const response = await fetch(`${MOVIES_ENDPOINT}${movieId}${CREDITS_API}?`,TMDB_API_OPTIONS);
            if(!response.ok){
              throw new Error("Unable to fetch Movies");
            }  
            const json = await  response.json();
            const cast = json?.cast?.slice(0,3).map(actor=>actor.name)?.join(", ");
            dispatch(addMovieCast({movieId,value:cast}));
        } catch (error) {
            console.log(error);
        }
        
    }
    if(!cast){
        fetchCast();
    }
  }
,[movieId])
}

export default useCast