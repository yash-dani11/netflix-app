import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MOVIES_ENDPOINT, SUGGESTIONS_ENDPOINT, TMDB_API_OPTIONS } from '../utils/constants';
import { addMovies } from '../redux/movieSlice';

const useSuggestions = (movieId) => {
    const suggestions = useSelector(state=>state.movies?.movieList?.suggestions?.id);
    const dispatch = useDispatch();
  useEffect(()=>{
        const fetchSuggestions = async()=>{
            try{
                const response = await fetch(`${MOVIES_ENDPOINT}${movieId}${SUGGESTIONS_ENDPOINT}`,TMDB_API_OPTIONS);
                if(!response.ok){
                    throw new Error("Unable to fetch suggestions");
                }
                const json = await response.json();
                const movies = json?.results;
                dispatch(addMovies({data:movies,id:movieId,key:"suggestion"}));
            }catch(e){
                console.log(e);
            }
        }
        if(!suggestions){
            fetchSuggestions();    
    }
  },[movieId])
}

export default useSuggestions