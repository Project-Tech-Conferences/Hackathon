import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const calculateTimeLeft = () => {
  let year = new Date().getFullYear()
  let difference = +new Date(`10/01/${year}`) - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      // months: Math.floor((difference / (1000 * 60 * 60 * 24)) % 24),
      weeks: Math.floor(difference/7)
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  return timeLeft
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year, setYear] = useState(new Date().getFullYear())
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
      setYear(new Date().getFullYear())
    }, 1000)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  })
  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    )
  })
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>Coming</h1>
            <div className="countdown">
              {timerComponents.length ? (
                timerComponents
              ) : (
                <span>Time's up!</span>
              )}
              <h2 className="months">02</h2>
              <h2 className="weeks">03</h2>
              <h2 className="days">{timeLeft.days}</h2>
              <h2 className="hours">{timeLeft.hours}</h2>
            </div>
            <h1>Soon</h1>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Countdown
