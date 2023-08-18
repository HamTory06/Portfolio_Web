import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from './pages/MainPage'
import Projects from './pages/Project'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/project" element={<Projects/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
