import React, { useState } from 'react'
import { itemData } from '../images/gallery.js'
import '../App.js'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import { dataHeader } from '../data.js'
import ImageComp from '../components/ImageComp'

const GalleryPage = () => {

    const items = useLocation()

    const [gall, setGall] = useState(dataHeader)

    const [imgs, setImgs] = useState(itemData)

    return (
        <div>
            {/* Navbar */}
            <Navbar item={items.state.data}></Navbar>
            {/* Header */}
            <Header item={gall.filter((galls) => galls.id === 4)}></Header>
            {/* Images */}
            <ImageComp item={imgs} vart={'masonry'} gap={16}></ImageComp>
        </div>
    )
}

export default GalleryPage
