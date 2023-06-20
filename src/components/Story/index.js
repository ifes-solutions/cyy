import React from 'react'
import './story.css'
import { Box, Grid } from '@mui/material'

const Story = (propsStor) => {
    return (
        <Box sx={{ flexGrow: 1 }} className="container">
            <Grid container>
                <Grid item xs={12} sm={12} md={2} lg={2} className="stor--div">
                    <h1>{/* use for empty block */}</h1>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className="stor--header">
                    <h1>{propsStor.item.title}</h1>
                </Grid>
            </Grid>
            <Grid container spacing={2} className="stor--div">
                <Grid item xs={12} sm={12} md={2} lg={2} className="stor--div">
                    <h1></h1>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className="stor--text">
                    <p className="stor--p">
                        {propsStor.item.desc1}
                    </p>
                    <br />
                    <p className="stor--p">
                        {propsStor.item.desc2}
                    </p>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className="stor--div">
                    <img src={propsStor.item.img} className="stor--img" />
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} className="stor--div">
                    <h1>{/* use for empty block */}</h1>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Story