import React,{useEffect} from 'react'
import { MapContainer, TileLayer,Marker } from 'react-leaflet'

function Map({x,y}) {
    const position = [parseFloat(x),parseFloat(y)]
    
    //Adjusting map height
    useEffect(()=>{
        const map = document.querySelector(".leaflet-container")
        const contactContainer = document.querySelector(".contactContainer")

        if(document.body.clientWidth >= 850){
            map.style.height = `${contactContainer.getBoundingClientRect().height+10}px`
        }
    },[])
    return (
        <MapContainer center={position} zoom={16}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}></Marker>          
        </MapContainer>
    )
}

export default Map
