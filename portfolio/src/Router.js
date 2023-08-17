import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from './pages/MainPage/MainPage.js'
import Projects from './pages/ProjectPage/Project.js'

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
