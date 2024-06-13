import { Link } from "react-router-dom"
import { MOVIE_IMAGE_CDN_URL } from "../utils/constants"

const MovieCard = ({details,category}) => {
  return (
    <Link to={`/play/${category}/${details?.id}`}>
    <div className="w-52 cursor-pointer py-4">
        <img src={`${MOVIE_IMAGE_CDN_URL}w342/${details?.poster_path}`} alt={details?.original_title} className="h-60 w-48 rounded-sm"></img>
    </div>
    </Link>
  )
}

export default MovieCard