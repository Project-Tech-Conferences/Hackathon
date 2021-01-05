import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"

const calculateTimeLeft = () => {
  let year = new Date().getFullYear()
  let hackDate = +new Date(`01/01/${year}`)
  let cur_time = +new Date()
  let difference = hackDate - cur_time
  let timeLeft = {}
  console.log(new Date(hackDate))

  if (difference > 0) {
    timeLeft = {
      months: Math.floor(difference / (1000 * 7 * 60 * 60 * 24 * 4)),
      weeks: Math.floor(difference / (1000 * 7 * 60 * 60 * 24)),
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
              {/* {timerComponents.length ? (
                timerComponents
              ) : (
                <span>Time's up!</span>
              )} */}
              {timerComponents.length ? (
                <>
                  <h2 className="months">{timeLeft.months} months </h2>
                  <h2 className="weeks">{timeLeft.weeks} weeks</h2>
                  <h2 className="days">{timeLeft.days} days</h2>
                  <h2 className="hours">{timeLeft.hours} hours </h2>
                  <h2 className="minutes">{timeLeft.minutes} minutes </h2>
                  <h2 className="seconds">{timeLeft.seconds} seconds </h2>
                </>
              ) : (
                <span>PTC Hacks has begun!!!</span>
              )}
              {/* <h2 className="months">{timeLeft.months} months </h2>
              <h2 className="weeks">{timeLeft.weeks} weeks</h2>
              <h2 className="days">{timeLeft.days} days</h2>
              <h2 className="hours">{timeLeft.hours} hours </h2>
              <h2 className="minutes">{timeLeft.minutes} minutes </h2>
              <h2 className="seconds">{timeLeft.seconds} seconds </h2> */}
            </div>
            <h1>Soon</h1>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Countdown
