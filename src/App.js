import React,{useEffect} from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Contact from './Components/Contact/Contact'

import Navbar from "./Components/Navbar/Navbar"
import Main from './Components/Main/Main'
import News from './Components/News/News'
import SideButtons from './Components/SideButtons/SideButtons'

function App() {
  const {pathname} = useLocation()

  //Adding effect to navbar, only on main
  useEffect(()=>{
      const navbar = document.querySelector(".navbar")
      if(pathname === "/"){
        navbar.style.position = "absolute"
        navbar.style.backgroundImage = "linear-gradient(#183a1d, #183a1d, rgba(24, 58, 29, 0))"
        navbar.getElementsByTagName("ul")[0].style.marginBottom = "2rem"
      }else {
        navbar.style.position = "static"
        navbar.style.backgroundImage = "linear-gradient(rgb(24, 58, 29), rgb(24, 58, 29)"
        navbar.getElementsByTagName("ul")[0].style.marginBottom = "0"
      }
  },[pathname])

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
