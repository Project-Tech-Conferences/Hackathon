import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>CODE FOR COVID</h1>
            </Fade>
            <p>{data.aboutParaOne}</p>
          </div>
          {/* <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div> */}
          <button type="button" class="btn btn-primary btn-lg">
            Large
          </button>
          <button type="button" className="btn btn-primary btn-lg">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
