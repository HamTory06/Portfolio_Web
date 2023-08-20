import React from 'react'
import "./Header.css"




const Header = () => {

  return (
    <header className='mainHeader'>
        <div className='buttonWrap'>
          <button className='button' onClick={()=>{
           
          }}>Project</button>
          <button className='button' onClick={() =>{
           
          }}>Activity</button>
          <button className='button' onClick={() =>{
            
          }}>Contest</button>
          <button className='button' onClick={() =>{

          }}>Stack</button>
        </div>

    </header>
  )
}

export default Header
