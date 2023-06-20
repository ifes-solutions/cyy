import React from 'react'
import { Box, Grid } from '@mui/material'
import './couple.css'
import '../../App.css'

const Couple = (porpsCoups) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container className="coup--title">
                <h1>
                    {porpsCoups.item.title}
                </h1>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={6} lg={6} className="coup--border">
                    <img src={porpsCoups.item.bridegroomImg} className="couple--image" />
                    <h1 className="coup--name">{porpsCoups.bridegroom}</h1>
                    <p className="coup--text">
                        {porpsCoups.item.bridegroomDesc}
                    </p>
            </Grid>
            <Grid item xxs={12} sm={6} md={6} lg={6} className="coup--border">
                <img src={porpsCoups.item.brideImg} className="couple--image" />
                <h1 className="coup--name">{porpsCoups.bride}</h1>
                <p className="coup--text">
                    {porpsCoups.item.brideDesc}
                </p>
            </Grid>
        </Grid>
        <img src={porpsCoups.item.weddingImg} className="couple--image2"/>
        </Box >

    )
}

export default Couple
