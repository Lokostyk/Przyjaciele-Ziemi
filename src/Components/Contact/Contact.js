import "./contact.scss"
import React,{useEffect,useState} from 'react'
import axios from "axios"
import {ADMIN_LINK} from '../../_admin'

import Map from "./subcomponents/Map"

function Contact() {
    const [contact,setContact] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`${ADMIN_LINK}/api/contacts/1`)
        .then(res=>{
            setContact(res.data.data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <>
        {loading?
            <div>Loading</div>:
            <section key={contact.id}>
                {/* <Map /> */}
                <div>
                    <pre>{contact.attributes.Postawowe_Informacje}</pre>
                </div>
            </section>
        }
        </>
    )
}

export default Contact
