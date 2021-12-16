import "./main.scss"
import React,{useEffect, useRef} from 'react'
import gsap from "gsap"

import Navbar from "../Navbar/Navbar"

function Main() {
    let mainRef = useRef(null)
    useEffect(()=>{
        const tl = gsap.timeline({duration:.8})
        tl.from(mainRef.querySelector(".slogans").getElementsByTagName("h1"),{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",duration:.8})
        tl.from(mainRef.querySelector(".slogans").getElementsByTagName("h2"),{clipPath:"polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",duration:.8})
        tl.from(mainRef.querySelector(".slogans").getElementsByTagName("h3"),{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",duration:1})

    },[mainRef])
    return (
        <section className="mainContainer" ref={(e)=> mainRef = e}>
            <div className="name">Polski Klub Ekologiczny "Przyjaciele Ziemi" w Stalowej Woli</div>
            <Navbar />
            <div className="slogans">
                <h1>Zielona Stalowa</h1>
                <h2>Dołącz<span></span> do nas!</h2>
                <h3>Przekaż<span className="gap"></span> <span>JEDEN PROCENT</span></h3>
            </div>
            <div className="background"></div>
        </section>
    )
}

export default Main
