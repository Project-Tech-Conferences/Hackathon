import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Countdown = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>Coming</h1>
            <h2 className="fds"></h2>
            <h1>Soon</h1>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Countdown
