import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact/Contact'

import Navbar from "./Components/Navbar/Navbar"
import Main from './Components/Main/Main'
import News from './Components/News/News'
import SideButtons from './Components/SideButtons/SideButtons'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<><Main/><News/><SideButtons/></>}/>
        <Route path="/kontakt" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
