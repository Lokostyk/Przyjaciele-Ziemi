import "./contact.scss"
import React,{useEffect,useState} from 'react'
import axios from "axios"
import {ADMIN_LINK} from '../../_admin'

import Map from "./subcomponents/Map"
import Loader from "../Other/Loader"

function Contact() {
    const [contact,setContact] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`${ADMIN_LINK}/api/contacts/1`)
        .then(res=>{
            console.log(res.data.data)
            setContact(res.data.data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <>
        {loading?
            <Loader style={{height:"100%",margin:"auto"}}/>:
            <div className="contactContainer" key={contact.id}>
                <Map x={contact.attributes.Koordynaty_X} y={contact.attributes.Koordynaty_Y}/>
                <div className="contactData">
                    <pre>
                        <h2>Odwiedź nas lub zadzwoń!</h2>
                        {contact.attributes.Postawowe_Informacje}
                    </pre>
                    <pre>{contact.attributes.Dyzury}</pre>
                    <pre className="phone">{contact.attributes.Telefon}</pre>
                    <pre>{contact.attributes.Dodatkowe_informacjie}</pre>
                </div>
            </div>
        }
        </>
    )
}

export default Contact
