import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <div className="ptc-container">
              <img className="ptc-icon" src={data.ptcIcon}></img>
              <div className="ptc-title">Project Tech Conferences</div>
              <div className="ptc-motto">stay in the loop</div>
              <div className="social-icons">
                {data.social.map(socialLink => (
                  <a
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={socialLink.img} alt="icons"></img>
                  </a>
                ))}
              </div>
            </div>
            .button-container{}
            <a className="return-button">Return to main site</a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Footer
