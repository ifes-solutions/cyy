import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './navbar.css'

function Navbar(propsNav) {

    const location = useLocation()
    const [url, setUrl] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        setUrl(location.pathname) // set url to current location pathname
    }, [location])

    return (
        /* ----- Reusable Navbar Component ----- */
        <>
            <nav className="nav">
                <img src={propsNav.item.img} className="nav--img" onClick={() => navigate("/")}/>
                <div>
                    <ul className="nav--ul">
                        <li>
                            <Link to="/" className={"nav--link" + (url === "/" ? " active": " not-active")}> {/* if current location path === "/xxxx", add active class */}
                                {propsNav.item.home}</Link>
                        </li>
                        <li>
                            <Link to="/location" state={{ data: propsNav.item }} className={"nav--link" + (url === "/location" ? " active": "")}>
                                {propsNav.item.location}</Link>
                        </li>
                        <li>
                            <Link to="/accommodations" state={{ data: propsNav.item }} className={"nav--link" + (url === "/accommodations" ? " active": "")}>
                                {propsNav.item.accommodations}</Link>
                        </li>
                        <li>
                            <Link to="/gallery" state={{ data: propsNav.item }} className={"nav--link" + (url === "/gallery" ? " active": "")}>
                                {propsNav.item.gallery}</Link>
                        </li>
                        <li>
                            <Link to="/joinUs" state={{ data: propsNav.item }} className={"nav--link" + (url === "/joinUs" ? " active": "")}>
                                {propsNav.item.joinUs}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
