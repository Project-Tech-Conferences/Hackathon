import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const calculateTimeLeft = () => {
  let year = new Date().getFullYear()
  const difference = +new Date(`10/01/${year}`) - +new Date()
}

const Countdown = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>Coming</h1>
            <div className="countdown">
              <h2 className="months">02</h2>
              <h2 className="weeks">03</h2>
              <h2 className="days">06</h2>
              <h2 className="hours">12</h2>
            </div>
            <h1>Soon</h1>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Countdown
