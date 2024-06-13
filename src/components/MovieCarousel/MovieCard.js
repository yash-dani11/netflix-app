import { Link } from "react-router-dom"
import { MOVIE_IMAGE_CDN_URL } from "../../utils/constants"

const MovieCard = ({details,category}) => {
  return (
    <Link to={`/play/${category}/${details?.id}`}>
    <div className="w-72 cursor-pointer py-4 sm:w-52">
        <img src={`${MOVIE_IMAGE_CDN_URL}w342/${details?.poster_path}`} alt={details?.original_title} className="h-72 w-64 rounded-sm md:w-48 md:h-64"></img>
    </div>
    </Link>
  )
}

export default MovieCard