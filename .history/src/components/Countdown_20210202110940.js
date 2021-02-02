import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import moment from "moment"

const calculateTimeLeft = () => {
  let hackDate = +new Date(`February 19, 2021 11:00:00`)
  let cur_time = +new Date()
  let difference = hackDate - cur_time
  console.log(difference)

  const addZero = equation => {
    return 0 < equation && equation < 10
  }

  var startDateTime = moment()
  var endDateTime = moment("2021-02-19 17:00:00")

  var timeLeft = endDateTime.diff(startDateTime, "milliseconds", true)

  var years = Math.floor(moment.duration(timeLeft).asYears())

  endDateTime = endDateTime.subtract(years, "years")
  timeLeft = endDateTime.diff(startDateTime, "milliseconds", true)

  var months = Math.floor(moment.duration(timeLeft).asMonths())

  endDateTime = endDateTime.subtract(months, "months")
  timeLeft = endDateTime.diff(startDateTime, "milliseconds", true)

  var weeks = Math.floor(moment.duration(timeLeft).asWeeks())
  endDateTime = endDateTime.subtract(weeks, "weeks")
  timeLeft = endDateTime.diff(startDateTime, "milliseconds", true)

  var days = Math.floor(moment.duration(timeLeft).asDays())

  endDateTime = endDateTime.subtract(days, "days")
  timeLeft = endDateTime.diff(startDateTime, "milliseconds", true)

  var hours = Math.floor(moment.duration(timeLeft).asHours())

  endDateTime = endDateTime.subtract(hours, "hours")
  timeLeft = endDateTime.diff(startDateTime, "milliseconds", true)

  var minutes = Math.floor(moment.duration(timeLeft).asMinutes())

  endDateTime = endDateTime.subtract(minutes, "minutes")
  timeLeft = endDateTime.diff(startDateTime, "milliseconds", true)

  var seconds = Math.floor(moment.duration(timeLeft).asSeconds())

  // console.log(
  //   years + "y",
  //   months + "m",
  //   weeks + "w",
  //   days + "d",
  //   hours + "h",
  //   minutes + "i",
  //   seconds + "s"
  // )

  if (difference > 0) {
    timeLeft = {
      weeks: addZero(weeks) ? `0${weeks}` : weeks,
      days: addZero(days) ? `0${days}` : days,
      hours: addZero(hours) ? `0${hours}` : hours,
      minutes: addZero(minutes) ? `0${minutes}` : minutes,
      seconds: addZero(seconds) ? `0${seconds}` : seconds,
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
                <div className="countdownFinished">
                  <span className="timer-done" style={{ color: "#ff6830" }}>
                    PTC
                  </span>
                  <span className="timer-done" style={{ color: "#92af63" }}>
                    Hacks
                  </span>
                  <span className="timer-done" style={{ color: "#3d9be9" }}>
                    has
                  </span>
                  <span
                    className="timer-done"
                    style={{ color: "rgb(124, 114, 232)" }}
                  >
                    begun!
                  </span>
                </div>
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
