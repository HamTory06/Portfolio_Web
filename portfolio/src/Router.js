import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from './pages/Main'
import Projects from './pages/Project'
import Stack from './pages/Stack'
import Activity from './pages/Activity'
import Contest from './pages/Contest'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/project" element={<Projects/>}/>
            <Route path="/stack" element={<Stack/>}/>
            <Route path="/activity" element={<Activity/>}/>
            <Route path="/contest" element={<Contest/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
