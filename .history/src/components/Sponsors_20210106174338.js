import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import blue from "../images/blue.png"

const Sponsors = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="aa-container">
          <Fade bottom cascade>
            <h1>Sponsors</h1>
          </Fade>
          <div className="image-wrapper"><img src={data.aboutImage}</div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
