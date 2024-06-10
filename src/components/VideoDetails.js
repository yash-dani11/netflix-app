import React from 'react'

const VideoDetails = ({title,desc}) => {
  return (
    <div className='h-[100%] text-white relative bg-opacity-65 z-10'>
        <div className='t pt-36 px-24 absolute top-52'>
        <h1 className='text-6xl font-bold w-3/4'>{title}</h1>
        <div className='w-3/4 my-8 line-clamp-2'>{desc}</div>
        <div>
            <button className='bg-white text-black px-4 py-2 font-bold rounded-md w-32 mr-8 mb-4 hover:bg-opacity-80'> ▶️ Play</button>
            <button className='bg-gray-500 px-4 py-2 bg-opacity-60 font-bold rounded-md w-32 hover:bg-opacity-40'> More Info</button>
        </div>
    </div>
    </div>
    
  )
}

export default VideoDetails