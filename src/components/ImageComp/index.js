import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'

const ImageComp = (props) => {

    const images = props.item

    const myStyle = {
        padding: '20px',
        marginTop: '30px'
}

return (
    /* ----- Reusable Images Component ----- */
    <div style={myStyle}>
        <ImageList variant={props.vart} cols={3} gap={props.gap}>
            {images.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </div>
)
}

export default ImageComp
