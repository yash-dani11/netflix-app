import React from 'react'
import { Link } from 'react-router-dom';

const VideoDetails = ({title,desc,id,category}) => {
  return (
    <div className='h-[100%] text-white relative bg-opacity-65 z-10'>
        <div className='pt-36 px-12 absolute top-28'>
        <h1 className='text-6xl font-bold w-3/4'>{title}</h1>
        <div className='w-1/2 my-8 line-clamp-2'>{desc}</div>
        <div>
            <Link to={`/play/${category}/${id}`}><button className='bg-white text-black px-4 py-2 font-bold rounded-md w-32 mr-8 mb-4 hover:bg-opacity-80'> ▶️ Play</button></Link>
            <button className='bg-gray-500 px-4 py-2 bg-opacity-60 font-bold rounded-md w-32 hover:bg-opacity-40'> More Info</button>
        </div>
    </div>
    </div>
    
  )
}

export default VideoDetails;