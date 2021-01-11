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
              <div className="ptc-icon"></div>
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
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Footer
