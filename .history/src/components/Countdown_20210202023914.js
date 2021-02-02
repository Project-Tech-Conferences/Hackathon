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
  var now = moment(now, "01/08/2016 15:00:00")
  var then = moment(then, "04/02/2018 14:20:30")
  // var diff = moment.duration(moment(then).diff(moment(now)))

  // var a = moment(a, "DD-MM-YYYY")
  // var b = moment(b, "DD-MM-YYYY")
  var days = now.diff(then, "week")
  console.log(days)
  // moment().format("MMMM Do YYYY, h:mm:ss a")
  // var now = "04/09/2013 15:00:00"
  // var then = "04/09/2013 14:20:30"
  // var starts = moment("2021-02-19 00:00:00")
  // var ends = moment()
  // var duration = moment.duration(ends.diff(starts))

  dy = d1.getYear() - d2.getYear()
  dm = d1.getMonth() - d2.getMonth()
  dd = d1.getDate() - d2.getDate()

  if (dd < 0) {
    dm -= 1
    dd += 30
  }
  if (dm < 0) {
    dy -= 1
    dm += 12
  }

  console.log(dy, "Year(s),", dm, "Month(s), and", dd, "Days.")
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
