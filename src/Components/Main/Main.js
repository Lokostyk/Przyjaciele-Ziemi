import "./main.scss"
import React from 'react'
import Navbar from "../Navbar/Navbar"

function Main() {
    return (
        <section className="mainContainer">
            <Navbar />
            <div className="slogans">
                <h1>Zielona Stalowa</h1>
                <h2>Dołącz<span></span> do nas!</h2>
                <h3>Przekaż<span className="gap"></span> <span>JEDEN PROCENT</span></h3>
            </div>
            <img className="background" src="/Images/background.webp" />
        </section>
    )
}

export default Main
