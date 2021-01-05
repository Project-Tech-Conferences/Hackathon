import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="about-title">
            <Fade bottom cascade>
              <h1>CODE FOR COVID</h1>
            </Fade>
          </div>
          <p className="about-content">{data.aboutParaOne}</p>
          {/* <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div> */}
          <</button>
          <a className="primary-btn">SIGN UP</a>
        </div>
      </div>
    </div>
  )
}

export default About
