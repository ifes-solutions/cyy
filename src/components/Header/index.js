import React from 'react'
import './header.css'

function Header(props) {

  const heads = props.item

  return (
    /* ----- Reusable Header Component ----- */
    <section>
      {heads.map((header) => (
        <div className="header--container">
          <img src={header.img} className="header--img" /> {/* Header Images */}
          <div className="inner--header">
            <div className="header--title">
              <span className="header--wrap">
                {header.title} {/* Header Title */}
              </span>
            </div>
            <div className="header--desc">
              <span className="header--wrap">
                {header.desc} {/* Header Description */}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section >
  )
}

export default Header
