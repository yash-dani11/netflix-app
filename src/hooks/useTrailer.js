import { useEffect } from "react";
import { MOVIES_ENDPOINT, TMDB_API_OPTIONS,VIDEO_API } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addTrailerVideo } from "../redux/movieSlice";

const useTrailer = (movieId,category) => {
  const dispatch = useDispatch();
  const youtubeId = useSelector(store =>store.movies?.trailerList[category]?.[movieId]);
  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const respone = await fetch(
          `${MOVIES_ENDPOINT}${movieId}${VIDEO_API}`,
          TMDB_API_OPTIONS
        );
        if (!respone.ok) {
          throw new Error("Unable to fetch Trailer Info");
        }
        const data = await respone.json();
        const trailerInfo = data?.results.find(
          (el) => {
            return el.type === "Trailer";
          }
        );
        
        dispatch(addTrailerVideo({value:trailerInfo?.key,category,movieId}));
      } catch (error) {
        console.log(error);
      }
    };
    
    if(!youtubeId){
      fetchMovieTrailer();
    }
  }, [movieId]);
  return;
};

export default useTrailer;
