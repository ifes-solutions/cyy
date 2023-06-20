import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import Form from '../../components/Form'
import { dataHeader } from '../../data'
import './joinUs.css'

const JoinUsPage = () => {

    const items = useLocation()
    const [jsPage, setJSPage] = useState(dataHeader)

    return (
        <div>
            {/* Navbar */}
            <Navbar item={items.state.data}></Navbar>
            {/* Header */}
            <Header item={jsPage.filter((jsPages) => jsPages.id === 5)}></Header>
            {/* Form */}
            <div className="ju--form">
                <Form></Form>
            </div>
        </div>
    )
}

export default JoinUsPage
