import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Schedule = () => {
  return (
    <div className="section" id="schedule">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>Schedule</h1>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Schedule
