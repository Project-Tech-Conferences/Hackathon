import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"

const calculateTimeLeft = () => {
  let year = new Date().getFullYear()
  let hackDate = +new Date(`01/06/${year}`)
  let cur_time = +new Date()
  let difference = hackDate - cur_time
  let timeLeft = {}

  const addZero = equation => {
    return 1 < equation && equation > 10
  }

  if (difference > 0) {
    timeLeft = {
      months: addZero(Math.floor(difference / (1000 * 60 * 60 * 24 * 7 * 4)))
        ? `0${Math.floor(difference / (1000 * 60 * 60 * 24 * 7 * 4))}`
        : Math.floor(difference / (1000 * 60 * 60 * 24 * 7 * 4)),

      weeks: addZero(Math.floor(difference / (1000 * 60 * 60 * 24 * 7)))
        ? `0${Math.floor(difference / (1000 * 60 * 60 * 24 * 7))}`
        : Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),

      days: addZero(Math.floor(difference / (1000 * 60 * 60 * 24)))
        ? `0${Math.floor(difference / (1000 * 60 * 60 * 24))}`
        : Math.floor(difference / (1000 * 60 * 60 * 24)),

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
                  <h2 className="months">
                    {timeLeft.months}
                    <div className="time-left">months</div>
                  </h2>
                  <h2 className="weeks">
                    {timeLeft.weeks}
                    <div className="time-left">weeks</div>
                  </h2>
                  <h2 className="days">
                    {timeLeft.days}
                    <div className="time-left">days</div>
                  </h2>
                  <h2 className="hours">
                    {timeLeft.hours}
                    <div className="time-left">hours</div>
                  </h2>
                  <h2 className="minutes">
                    {timeLeft.minutes}
                    <div className="time-left">minutes</div>
                  </h2>
                  <h2 className="seconds">
                    {timeLeft.seconds}
                    <div className="time-left">seconds</div>
                  </h2>
                </>
              ) : (
                <span className="timer-done">PTC Hacks has begun!</span>
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
