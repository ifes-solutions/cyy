import React, { useState } from 'react'
import '../App.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Couple from '../components/Couple';
import Story from '../components/Story';
import { dataName, dataNav, dataCouple, dataHeader, dataStory } from '../data';

function HomePage() {

    let bride, bridegroom

    const [heads, setHeads] = useState(dataHeader)

    const bridesName = dataName.map(name => {
        bride = name.bride
        bridegroom = name.bridegroom
    })

    /* Navbar */
    const navbs = dataNav.map(function (item) {
        return <Navbar
            key={item.id}
            item={item}
        />
    })

    /* Couple */
    const couples = dataCouple.map(function (item) {
        return <Couple
            key={item.id}
            item={item}
            bride={bride}
            bridegroom={bridegroom}
        />
    })

    /* Story */
    const stories = dataStory.map(function (item) {
        return <Story
            key={item.id}
            item={item}
        />
    })

    return (
        <>
            {navbs}
            <Header item={heads.filter((head) => head.id === 1)} />
            {couples}
            {stories}
        </>
    );

}

export default HomePage;
