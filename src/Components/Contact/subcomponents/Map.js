import React from 'react'
import { MapContainer, TileLayer,Marker } from 'react-leaflet'

function Map({x,y}) {
    const position = [parseFloat(x),parseFloat(y)]
    
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
