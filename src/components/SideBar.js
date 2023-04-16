import React from 'react'
const SideBar = () => {
  return (
    <div className='shadow-lg w-48 p-2'>
      <ul>
        <li><i className="las la-home"></i> Home</li>
        <li><i className="las la-home"></i> Shorts</li>
        <li><i className="las la-video"></i> Videos</li>
        <li><i className="las la-truck"></i> Live</li>
       </ul> 
       <h1 className='font-bold'>Subscriptions</h1>
       <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
       </ul> 
       <h1 className='font-bold'>Watch Latter</h1>
       <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
       </ul> 
    </div>
  )
}

export default SideBar