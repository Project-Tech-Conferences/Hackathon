import React from "react"
import Fade from "react-reveal/Fade"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Schedule = () => {
  return (
    <div className="section" id="schedule">
      <div className="container">
        <div className="schedule-container">
          <Fade top>
            <h1 className="schedule-header">Schedule</h1>
          </Fade>

          <Fade left>
            <div className="friday day">
              <h2 className="friday-date">FEBRUARY 19TH</h2>
              <div className="friday-schedule">
                <div className="friday-time">5:00 pm</div>
                <div>Registration/sign in</div>
                <div className="friday-time">5:30 pm</div>
                <div>Opening ceremony</div>
                <div className="friday-time">6:00 pm</div>
                <div>Github Workshop</div>
                <div className="friday-time">7:00 pm</div>
                <div>Begin hackathon</div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="saturday day">
              <h2 className="saturday-date">FEBRUARY 20TH</h2>
              <div className="saturday-schedule">
                <div className="saturday-time">8:30 am</div>
                <div>Day opening ceremony</div>
                {/* <div className="saturday-time">8:00 am</div>
                <div>Social</div> */}
                {/* <div className="saturday-time">10:00 am</div>
                <div>Guest speaker #2</div> */}
                <div className="saturday-time">11:00 am</div>
                <div>Product/Program Management @ Microsoft</div>
                <div className="saturday-time">12:00 pm</div>
                <div>Networking session</div>
                <div className="saturday-time">1:00-2:00 pm</div>
                <div>Lunch</div>
                <div className="saturday-time">2:00-2:45 pm</div>
                <div>
                  Navigating through career in tech as a women at Google
                </div>
                <div className="saturday-time">3:00-4:00 pm</div>
                <div>Guest speaker #2</div>
                <div className="saturday-time">7:00 pm</div>
                <div>Social</div>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="sunday day">
              <h2 className="sunday-date">FEBRUARY 21ST</h2>
              <div className="sunday-schedule">
                <div className="sunday-time">7:30 am</div>
                <div>Day opening ceremony</div>
                <div className="sunday-time">8:00 am</div>
                <div>TBD</div>
                <div className="sunday-time">10:00 am</div>
                <div>Final submissions due</div>
                <div className="sunday-time">11:00 am</div>
                <div>Social</div>
                <div className="sunday-time">12:00 pm</div>
                <div>Guest speaker #3</div>
                <div className="sunday-time">1:00-2:00 pm</div>
                <div>Workshop</div>
                <div className="sunday-time">5:00 pm</div>
                <div>Judging</div>
                <div className="sunday-time">7:00 pm</div>
                <div>Closing ceremony</div>
              </div>
            </div>
          </Fade>
          <div className="button-div">
            <button onClick={() => scrollTo("#home")} className="top-button">
              Back to Top &nbsp; <FontAwesomeIcon icon="chevron-up" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
