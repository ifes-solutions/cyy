import React, { useState } from 'react'
import './location.css'
import { Grid } from '@mui/material'
import '../../App.js'
import Navbar from '../../components/Navbar'
import Map from '../../components/Map'
import { useLocation } from 'react-router-dom'
import { itemData } from '../../images/locationImg.js'
import { dataHeader } from '../../data'
import Header from '../../components/Header'
import ImageComp from '../../components/ImageComp'

const LocationPage = (props) => {

    const location = useLocation()
    const [loc, setLoc] = useState(dataHeader)
    const [imgs, setImgs] = useState(itemData)

    return (
        <section>
            {/* Navbar */}
            <Navbar item={location.state.data}></Navbar>
            {/* Header */}
            <Header item={loc.filter((loca) => loca.id === 2)} />
            <Grid container spacing={2} className="location--div">
                <Grid item xs={12} sm={12} md={12} lg={12} className="location--text">
                    <p className="location--span">
                        <a href={props.item.venueUrl} className="blackBold">
                            {props.item.venue}</a>
                        {props.item.desc1}
                    </p><br />
                    <p className="location--span">
                        {props.item.desc2}
                    </p>
                </Grid>
            </Grid>
            {/* Images */}
            <ImageComp item={imgs} vart={'none'} gap={10}></ImageComp>
            {/* Desc */}
            <Grid container spacing={2} className="location--div">
                <Grid item xs={12} sm={12} md={12} lg={12} className="desc--title">
                    <h1>{props.item.descTitle}</h1>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} className="location--text">
                    <p className="location--span">
                        {props.item.desc3}
                    </p><br />
                    <p className="location--span">
                        <b><u>From Milan:</u></b>{props.item.desc4}
                    </p><br />
                    <p className="location--span">
                        <b><u>From Verona:</u></b>{props.item.desc5}
                    </p><br />
                    <p className="location--span">
                        {props.item.desc6}
                    </p><br />
                </Grid>
                {/* Map */}
                <Grid item xs={12} sm={12} md={12} lg={12} className="location--text">
                    <div className="location--span">
                        <Map />
                    </div>
                </Grid>
            </Grid>
        </section>
    )
}

export default LocationPage
