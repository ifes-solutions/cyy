import React, { useState } from 'react'
import './accomm.css'
import '../../App.js'
import Navbar from '../../components/Navbar'
import { useLocation } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import RoomCard from '../../components/RoomCard'
import HotelCard from '../../components/HotelCard'
import { roomData, hotelData, dataHeader } from '../../data'
import Header from '../../components/Header'

const AccommodationPage = () => {

    const items = useLocation()
    const [accom, setAccom] = useState(dataHeader)

    const rooms = roomData.map(function (room) {
        return <RoomCard
            key={room.id}
            item={room} />
    })

    const hotels = hotelData.map(function (hotel) {
        return <HotelCard
            key={hotel.id} dataAlt
            item={hotel} />
    })

    return (
        <section>
            {/* Navbar */}
            <Navbar item={items.state.data}></Navbar>
            {/* Header */}
            <Header item={accom.filter((accoms) => accoms.id === 3)}></Header>
            {/* Body */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container className="accom--title">
                    <h1 className="border--color">
                        Villa Cortine
                    </h1>
                </Grid>
                <Grid container spacing={2} className="accom--div">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="accom--text">
                        <p className="accom--span">
                            Villa Cortine is located in the historical center inside the Sirmione walls – this means you’ll have to park outside the castle walls. Villa Cortine offers a shuttle from outside of the castle to the hotel, otherwise it’s a 15 minute walk from the parking area.
                        </p><br />
                        <p className="accom--span">
                            24 rooms will be blocked off for wedding guests at the Villa Cortine hotel (3 night minimum stay). Please have a look at the options below and feel free to reach out with any queations!
                        </p>
                    </Grid>
                </Grid>
            </Box>
            {/* Rooms Card*/}
            <div className="wrapper">
                {rooms}
            </div>
            {/* Hotels Card */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container className="accom--title">
                    <h1 className="border--color">
                        Alternative Sirmione Accommodations
                    </h1>
                </Grid>
                <Grid container spacing={2} className="accom--div">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="accom--text">
                        <p className="accom--span">
                            We’ve included some alternative accommodations below, with a variety of options for price and parking/accessibility. Similar to Villa Cortine, if a hotel is inside the Sirmione walls, you will have to park outside and either walk 15 minutes or take a shuttle service to your accommodation.
                        </p><br />
                        <p className="accom--span">
                            We don’t have any room blocks at these hotels so feel free to book whenever you would like. Just remember that it’s a popular area –  don’t wait too long!
                        </p>
                    </Grid>
                </Grid>
            </Box>
            <div className="wrapper">
                {hotels}
            </div>
        </section>
    )
}

export default AccommodationPage
