import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useTrailer from '../hooks/useTrailer';
import { useDispatch, useSelector } from 'react-redux';
import { EMBED_VIDEO_ENDPOINT } from '../utils/constants';
import { hideHeader, showHeader } from '../utils/headerSlice';
const Player = () => {
  const movieId = useParams("id")?.id;
  const category = useParams("category")?.category;
  const navigate = useNavigate();
  useTrailer(movieId,category);
  const youtubeId = useSelector(store =>store.movies?.trailerList[category]?.[movieId]);
  const iframeRef = useRef();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(hideHeader());
    return ()=> dispatch(showHeader());
  })


  const handleFullScreen = ()=>{
    iframeRef.current.requestFullscreen();
  }
  const navigateBack = ()=>{
    navigate("/browse");
  }
  
  return (
    <div className='overflow-hidden w-screen h-screen relative'>
        <div className="relative pb-[56.25%] pt-6 w-[300%] left-[-100%] h-screen">
      {youtubeId && (
        <iframe
            id="video"
          className="absolute top-0 left-0 w-full h-full"
          src={`${EMBED_VIDEO_ENDPOINT}${youtubeId}?autoplay=1&mute=1&controls=0`}
          title="YouTube Trailer"
          ref={iframeRef}
        ></iframe>
      )}
    </div>
    <div className='flex justify-between w-screen items-center'>
        <button className='text-white absolute top-5 left-6 my-3 mx-6' onClick={navigateBack}><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img"><path fillRule="evenodd" clipRule="evenodd" d="M6.41421 10.9998L21 10.9998L21 12.9998L6.41421 12.9998L11.7071 18.2927L10.2929 19.7069L3.29289 12.7069C2.90237 12.3164 2.90237 11.6832 3.29289 11.2927L10.2929 4.29272L11.7071 5.70694L6.41421 10.9998Z" fill="currentColor"></path></svg></button>
    <button className='absolute bottom-5 right-6 z-20 text-white my-2 mx-6 h-10' onClick={handleFullScreen}><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 24 24" role="img"><path fillRule="evenodd" clipRule="evenodd" d="M0 5C0 3.89543 0.895431 3 2 3H9V5H2V9H0V5ZM22 5H15V3H22C23.1046 3 24 3.89543 24 5V9H22V5ZM2 15V19H9V21H2C0.895431 21 0 20.1046 0 19V15H2ZM22 19V15H24V19C24 20.1046 23.1046 21 22 21H15V19H22Z" fill="currentColor"></path></svg></button>
    </div>
    </div>
  )
}

export default Player