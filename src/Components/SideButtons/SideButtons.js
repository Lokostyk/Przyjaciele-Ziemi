import "./sideButtons.scss"
import React from 'react'

function SideButtons() {
    return (
        <section className="btnsContainer">
            <button><img src="/Images/call.svg"/></button>
            <button><img src="/Images/mail.svg"/></button>
            <button><img src="/Images/pin.svg"/></button>
            <button><img src="/Images/double-arrow.svg"/></button>
        </section>
    )
}

export default SideButtons
