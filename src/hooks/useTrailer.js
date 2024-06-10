import { useEffect } from "react";
import { MOVIE_VIDEO_ENDPOINT, TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
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
          (el) => el.name === "Official Trailer"
        );
        dispatch(addTrailerVideo(trailerInfo.key));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieTrailer();
  }, []);
  return;
};

export default useTrailer;
