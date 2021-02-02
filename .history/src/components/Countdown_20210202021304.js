import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import moment from "moment"

const calculateTimeLeft = () => {
  let hackDate = +new Date(`February 19, 2021 17:00:00`)
  let cur_time = +new Date()
  let difference = hackDate - cur_time
  let timeLeft = {}

  const addZero = equation => {
    return 0 < equation && equation < 10
  }


  // moment
  //   .utc(
  //     moment(now, "DD/MM/YYYY HH:mm:ss").diff(
  //       moment(then, "DD/MM/YYYY HH:mm:ss")
  //     )
  //   )
  //
  //   .format("HH:mm:ss")
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

      hours: addZero(Math.floor(difference / (1000 * 60 * 60)) % 24)
        ? `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}`
        : Math.floor((difference / (1000 * 60 * 60)) % 24),

      minutes: addZero(Math.floor((difference / 1000 / 60) % 60))
        ? `0${Math.floor((difference / 1000 / 60) % 60)}`
        : Math.floor((difference / 1000 / 60) % 60),

      seconds: addZero(Math.floor((difference / 1000) % 60))
        ? `0${Math.floor((difference / 1000) % 60)}`
        : Math.floor((difference / 1000) % 60),
    }
  }
  return timeLeft
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
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
            <h1 className="coming">Coming</h1>
            <div className="countdown">
              {timerComponents.length ? (
                <>
                  <div className="weeks">{timeLeft.weeks}</div>
                  <div className="time-left" style={{ color: "#ff6830" }}>
                    weeks
                  </div>
                  <div className="days">{timeLeft.days}</div>
                  <div className="time-left" style={{ color: "#ff8b0f" }}>
                    days
                  </div>
                  <div className="hours">{timeLeft.hours}</div>
                  <div className="time-left" style={{ color: "#92af63" }}>
                    hours
                  </div>
                  <div className="minutes">{timeLeft.minutes}</div>
                  <div className="time-left" style={{ color: "#3d9be9" }}>
                    minutes
                  </div>
                  <div className="seconds">{timeLeft.seconds}</div>
                  {/* <div className="seconds">40</div> */}
                  <div
                    className="time-left"
                    style={{ color: "rgb(124, 114, 232)" }}
                  >
                    seconds
                  </div>
                </>
              ) : (
                <span className="timer-done">PTC Hacks has begun!</span>
              )}
            </div>
            <h1 className="soon">Soon</h1>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Countdown
