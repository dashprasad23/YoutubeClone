import React from 'react'
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';
import { Outlet } from 'react-router-dom';
const MainContainer = () => {
  return (
    <div className='p-2'>
        <ButtonList/>
        <Outlet/>
    </div>
  )
}

export default MainContainer