import React from 'react'
import "./Header.css"

const Header = ({ homeClick, stacksClick, activityClick, projectClick, contestClick }) => {
  return (
    <header className='mainHeader'>
        <div className='buttonWrap'>
          <button className='button' onClick={homeClick}>Home</button>
          <button className='button' onClick={stacksClick}>Stack</button>
          <button className='button' onClick={projectClick}>Project</button>
          <button className='button' onClick={contestClick}>Contest</button>
          <button className='button' onClick={activityClick}>Activity</button>        </div>
    </header>
  )
}

export default Header
