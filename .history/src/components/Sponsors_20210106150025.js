import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Sponsors = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="12-container">
          <Fade bottom cascade>
            <h1>Sponsors</h1>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
