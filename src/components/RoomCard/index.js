import React, { useState } from 'react'
import './cards.css'

const Cards = (props) => {

    let badgetText
    let mul = props.item.price * 3

    if (props.item.openSpot === 0) {
        badgetText = "No Rooms Available"
    } else {
        badgetText = `${props.item.openSpot} Rooms Available`
    }

    return (
        <div className="card">
            <div>
                <p className="card--title">{props.item.roomTitle}</p>
                <div className="card--span">
                    <small>
                        <span>${props.item.price.toLocaleString()}/night</span>
                        <span> | ${mul.toLocaleString()}</span>
                        <span> | {props.item.sqMeter}</span>
                        <span
                            className="card--openSpot"
                            style={props.item.openSpot === 0 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}
                        > | {badgetText}
                        </span>
                    </small>
                </div>
                <img src={props.item.img} className="card--img" />
            </div>
        </div>
    )
}

export default Cards
