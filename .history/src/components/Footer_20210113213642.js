import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <div className="footer-align">
            <Fade bottom cascade>
              <div className="ptc-container">
                <img className="ptc-icon" src={data.ptcIcon} alt="icons"></img>
                <div className="ptc-title">Project Tech Conferences</div>
                <div className="ptc-motto">stay in the loop</div>
                <div className="social-icons">
                  {data.social.map(socialLink => (
                    <a
                      href={socialLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={socialLink.key}
                    >
                      <img src={socialLink.img} alt="icons"></img>
                    </a>
                  ))}
                </div>
              </div>
              {/* <div className="button-container"> */}
              <a
                className="return-button"
                href="https://www.projecttechconferences.com/"
              >
                Return to main site
              </a>
              {/* </div> */}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
