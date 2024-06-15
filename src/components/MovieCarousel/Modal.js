import React from 'react'
import { EMBED_VIDEO_ENDPOINT } from '../../utils/constants'
import { Link } from 'react-router-dom';
import useTrailer from '../../hooks/useTrailer';
import { useDispatch, useSelector } from 'react-redux';
import useCast from '../../hooks/useCast';
import { closeModal } from '../../redux/modalSlice';
const Modal = () => {
  const category = useSelector(store=>store?.modal?.category);
  const details = useSelector(store=>store?.modal.details);
  const dispatch = useDispatch();
  const {id} = details;
  useTrailer(id,category);
  useCast(id,category);
  const youtubeId = useSelector(state=>state.movies?.trailerList?.[category]?.[id])
  const cast = useSelector(state=>state.movies?.castList?.[id]);
  
  const close = ()=>{
    dispatch(closeModal());
  }
  return (
    <><div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60 pt-20" onClick={close}>
    <div className="w-4/5 sm:w-3/5  bg-[#201c1c] rounded-lg overflow-scroll relative h-[85%]">
    <button className='absolute right-0 top-0 z-50 p-4' onClick={close}><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" ><path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg></button>
      <div className="w-full rounded-lg">
    <div className='overflow-x-hidden h-2/5'><div className="relative pb-[56.25%] pt-24 sm:pt-6 w-[300%] left-[-100%] rounded-lg">
    {youtubeId && (
      <iframe
        className="absolute top-20 sm:-top-2 left-0 w-full h-full"
        src={`${EMBED_VIDEO_ENDPOINT}${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&${youtubeId}`}
        title="YouTube Trailer"
      ></iframe>
    )}
  </div></div>
  <div className='h-full text-white bg-gradient-to-t from-transparent relative bg-opacity-65 z-10 text-center md:text-left sm:-mt-52 pb-20'>
      <div className='px-12'>
      <h1 className='absolute text-2xl md:text-4xl tab:text-5xl font-bold md:w-3/4 -top-24 sm:static'>{details?.original_title}</h1>
      <div className='absolute -top-20 sm:static mt-4 sm:mt-auto'><Link to={`/play/${category}/${details?.id}`}><button className='bg-white text-black w-20 px-2 md:px-4 py-2 my-4 font-bold rounded-md md:w-32 mr-8 mb-4 hover:bg-opacity-80'> ▶️ Play</button></Link></div>
      <div className='flex flex-col sm:flex-row justify-between mt-28 sm:mt-12 overflow-scroll h-1/2'><div className='text-left w-full sm:w-3/5'>{details?.overview} </div><div className='text-left mt-4 sm:mt-0 sm:text-right sm:w-1/3'><span className='font-bold'>Cast:{" "}</span>{cast}</div></div>
  </div>
  </div>
  </div>
    </div>
  </div></>
  )
}

export default Modal