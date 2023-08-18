import React from 'react'
import "./Header.css"
import HamtoryIcon from "/Users/hamtory/Documents/github/Web/Portfolio_Web/portfolio/src/asset/MainPage/header/HamTory.png"

const Header = () => {
  return (
    <header className='mainHeader'>
        <div className='buttonWrap'>
          <img src={HamtoryIcon} className='iconImage'/>
          <button className='button'>Project</button>
          <button className='button'>Activity</button>
          <button className='button'>Contest</button>
          <button className='button'>Stack</button>
        </div>
    </header>
  )
}

export default Header
