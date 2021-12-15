import "./navbar.scss"
import React from 'react'

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a>Aktualności</a></li>
                <li><a>O nas</a></li>
                <li><a>Ekospotkania</a></li>
                <li><a>Edukacja</a></li>
                <li><a>Ciekawe</a></li>
                <li><a>JEDEN PROCENT</a></li>
                <li><a>Kontakt</a></li>
            </ul>
            <img className="logo" src="/Images/logo.jpg" />
        </nav>
    )
}

export default Navbar
