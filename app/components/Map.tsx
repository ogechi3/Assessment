"use client"
import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript,OverlayView } from '@react-google-maps/api'

const containerStyle = {
    width:"100%",
    heigjt:'500px'
};
const center = {
    lat:11.5,lon:8.5
}

const Map = () => {
  return (
    <div>
        <LoadScript
        googleMapsApiKey= {process.env.Next_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
            <GoogleMap
            mapContainerStyle={containerStyle}
            // Couldnt get API key
            />
        </LoadScript>
      
    </div>
  )
}

export default Map
