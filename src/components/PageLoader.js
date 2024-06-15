import React from 'react'
import LOADER from "../assets/loader.gif";
const PageLoader = () => {
  return (
    <div className='flex justify-center items-center'><img src={LOADER} alt="Loading..."></img></div>
  )
}

export default PageLoader