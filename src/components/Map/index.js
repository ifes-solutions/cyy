import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useMemo } from 'react' // used to memorize the result
import './map.css'

const Map = () => {
    const center = useMemo(() => ({ lat: 45.497672, lng: 10.605993 }), []);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    const onMarkerClick = () => {
        window.open("https://maps.google.com?q=" + center.lat + "," + center.lng)
    }

    return (
        <div>
            {!isLoaded ? (
                <h1>Loading...</h1> // todo: handle google maps loading error
            ) : (
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerClassName="mapContainer"
                >
                    <Marker position={center} onClick={onMarkerClick}></Marker>
                </GoogleMap>
            )}
        </div>
    )
}

export default Map
