import React from 'react'
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  return (
    <div className='flex h-[100vh]'>
        {isMenuOpen && <SideBar/>}
        <MainContainer/>
    </div>
  )
}

export default Body