import React from 'react'
import './hotelCard.css'

const HotelCard = (props) => {
    return (
        <div className="alt">
            <div>
                <img src={props.item.img} className="alt--img" />
                <p className="alt--title">{props.item.title}</p>
                <div className="alt--span">
                    <span>{props.item.desc} | </span>
                    <a href={props.item.website} className="blackBold">Website</a>
                </div>
            </div>
        </div>
    )
}

export default HotelCard
