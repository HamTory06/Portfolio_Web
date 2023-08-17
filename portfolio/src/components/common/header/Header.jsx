import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header className='mainHeader'>
        <div className='ButtonWrap'>
          <button className='button'>Project</button>
          <button className='button'>Activity</button>
          <button className='button'>Contest</button>
          <button className='button'>Stack</button>
        </div>
    </header>
  )
}

export default Header
