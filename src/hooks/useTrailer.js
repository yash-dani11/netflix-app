import { useEffect } from "react";
import { MOVIE_VIDEO_ENDPOINT, TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailer = (movieId,category) => {
  const dispatch = useDispatch();
  const youtubeId = useSelector(store =>store.movies?.trailerList[category]?.[movieId]);
  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const respone = await fetch(
          `${MOVIE_VIDEO_ENDPOINT}${movieId}/videos`,
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
  }, []);
  return;
};

export default useTrailer;
