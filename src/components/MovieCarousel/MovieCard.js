import { useDispatch } from "react-redux"
import { MOVIE_IMAGE_CDN_URL } from "../../utils/constants"
import { viewModal } from "../../redux/modalSlice";

const MovieCard = ({details,category}) => {
  const dispatch = useDispatch();
  const openModal = ()=>{
    dispatch(viewModal({details,category}));
  }
  return (
    
    <><div className="w-72 cursor-pointer py-4 sm:w-52" onClick={openModal}>
    <img src={`${MOVIE_IMAGE_CDN_URL}w342/${details?.poster_path}`} alt={details?.original_title} className="h-72 w-64 rounded-sm md:w-48 md:h-64"></img>
</div>
</>
    
  )
}

export default MovieCard