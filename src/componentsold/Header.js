import React from "react"
import Fade from "react-reveal/Fade"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom cascade>
            {
              <div className="heading-wrapper">
                <h1 className="title">PTC HACKS</h1>
                <h3 className="description">
                  hackathon for highschool students
                </h3>
                <h2 className="date">February 19th-21st</h2>
                <a
                  href={"https://projecttc.typeform.com/to/myGJeoEM"}
                  className="primary-btn"
                >
                  Apply
                </a>
              </div>
            }
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
