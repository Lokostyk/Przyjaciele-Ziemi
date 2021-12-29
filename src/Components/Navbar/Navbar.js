import "./navbar.scss"
import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="name">Polski Klub Ekologiczny "Przyjaciele Ziemi" w Stalowej Woli</div>
            <ul>
                <li><Link to="/">Aktualności</Link></li>
                <li><a>O nas</a></li>
                <li><a>Ekospotkania</a></li>
                <li><a>Edukacja</a></li>
                <li><a>Ciekawe</a></li>
                <li><Link to="/jeden_procent">JEDEN PROCENT</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
