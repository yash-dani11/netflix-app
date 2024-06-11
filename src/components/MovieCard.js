import { MOVIE_IMAGE_CDN_URL } from "../utils/constants"

const MovieCard = ({details}) => {
  return (
    <div className="w-64">
        <img src={`${MOVIE_IMAGE_CDN_URL}w342/${details?.poster_path}`} alt={details?.original_title} className="h-36 w-60 rounded-sm"></img>
    </div>
  )
}

export default MovieCard