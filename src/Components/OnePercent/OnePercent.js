import "./onePercent.scss"
import React from 'react'
import { Link } from "react-router-dom"

function OnePercent() {
    return (
        <section className='oneContainer'>
            <h1>PODARUJ NAM JEDEN PROCENT SWOJEGO PODATKU</h1>
            <img src="./Images/procent.png"/>
            <h3>Nie wiesz jak przekazać? <Link to="/kontakt">Zadzwoń do nas</Link> - pomożemy!</h3>
        </section>
    )
}

export default OnePercent
