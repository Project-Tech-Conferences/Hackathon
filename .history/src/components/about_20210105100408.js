import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          {/* <div className="content"> */}
          <Fade bottom cascade>
            <h1>Code for Covid</h1>
          </Fade>
          <p className="about-content">{data.aboutParaOne}</p>
          <a className="signUp" href="">SIGN UP</a>
        </div>

        {/* </div> */}
      </div>
    </div>
  )
}

export default About
