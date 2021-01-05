import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const calculateTimeLeft = () => {
  let year = new Date().getFullYear()
  let difference = +new Date(`10/01/${year}`) - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  return timeLeft
}

const Countdown = () => {
  const [timeLeft, ]
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
