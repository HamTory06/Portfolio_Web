import React from 'react'
import "./Header.css"
import HamtoryIcon from "../../../asset/header/HamTory.png"
import {useNavigate} from "react-router-dom"

const Header = () => {
  const Navigate = useNavigate();
  return (
    <header className='mainHeader'>
        <div className='buttonWrap'>
          <img src={HamtoryIcon} className='iconImage' onClick={()=>{
            Navigate("/");
          }}/>
          <button className='button' onClick={()=>{
            Navigate("/project");
          }}>Project</button>
          <button className='button' onClick={() =>{
            Navigate("/activity")
          }}>Activity</button>
          <button className='button' onClick={() =>{
            Navigate("/contest")
          }}>Contest</button>
          <button className='button' onClick={() =>{
            Navigate("/stack")
          }}>Stack</button>
        </div>
    </header>
  )
}

export default Header
