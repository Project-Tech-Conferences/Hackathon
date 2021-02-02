import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import moment from "moment"

// const calculateTimeLeft = () => {
//   let hackDate = +new Date(`February 19, 2021 17:00:00`)
//   let cur_time = +new Date()
//   let difference = hackDate - cur_time
//   let timeLeft = {}

//   const addZero = equation => {
//     return 0 < equation && equation < 10
//   }

//   const then = moment(timeTillDate, timeFormat)
//   const now = moment()
//   const countdown = moment(then - now)
//   const days = countdown.format("D")
//   const hours = countdown.format("HH")
//   const minutes = countdown.format("mm")
//   const seconds = countdown.format("ss")

//   if (difference > 0) {
//     timeLeft = {
//       months: addZero(Math.floor(difference / (1000 * 60 * 60 * 24 * 7 * 4)))
//         ? `0${Math.floor(difference / (1000 * 60 * 60 * 24 * 7 * 4))}`
//         : Math.floor(difference / (1000 * 60 * 60 * 24 * 7 * 4)),

//       weeks: addZero(Math.floor(difference / (1000 * 60 * 60 * 24 * 7)))
//         ? `0${Math.floor(difference / (1000 * 60 * 60 * 24 * 7))}`
//         : Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),

//       days: addZero(Math.floor(difference / (1000 * 60 * 60 * 24)))
//         ? `0${Math.floor(difference / (1000 * 60 * 60 * 24))}`
//         : Math.floor(difference / (1000 * 60 * 60 * 24)),

//       hours: addZero(Math.floor(difference / (1000 * 60 * 60)) % 24)
//         ? `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}`
//         : Math.floor((difference / (1000 * 60 * 60)) % 24),

//       minutes: addZero(Math.floor((difference / 1000 / 60) % 60))
//         ? `0${Math.floor((difference / 1000 / 60) % 60)}`
//         : Math.floor((difference / 1000 / 60) % 60),

//       seconds: addZero(Math.floor((difference / 1000) % 60))
//         ? `0${Math.floor((difference / 1000) % 60)}`
//         : Math.floor((difference / 1000) % 60),
//     }
//   }
//   return timeLeft
// }

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props
      const then = moment(timeTillDate, timeFormat)
      const now = moment()
      const countdown = moment(then - now)
      const days = countdown.format("D")
      const hours = countdown.format("HH")
      const minutes = countdown.format("mm")
      const seconds = countdown.format("ss")
      this.setState({ days, hours, minutes, seconds })
    }, 1000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state
    return (
      <div className="section">
        <div className="container">
          <div className="promotion-container">
            <Fade bottom cascade>
              <h1 className="coming">Coming</h1>
              <div className="countdown">
                {/* {timerComponents.length ? ( */}
                <>
                  {/* <div className="weeks">{timeLeft.weeks}</div>
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
                  </div> */}
                  <div className="seconds">{timeLeft.seconds}</div>
                  <div
                    className="time-left"
                    style={{ color: "rgb(124, 114, 232)" }}
                  >
                    seconds
                  </div>
                </>
                {/* ) : (<span className="timer-done">PTC Hacks has begun!</span> */}
                {/* )} */}
              </div>
              <h1 className="soon">Soon</h1>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default Countdown
