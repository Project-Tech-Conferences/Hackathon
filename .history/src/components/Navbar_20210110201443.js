import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")} className="about-button">
              ABOUT
            </button>
            <button
              onClick={() => scrollTo("#challenges")}
              className="challenge-button"
            >
              CHALLENGE
            </button>
            <button
              onClick={() => scrollTo("#sponsors")}
              className="sponsors-button"
            >
              SPONSORSHIP
            </button>
            <button onClick={() => scrollTo("#faq")} className="faq-button">
              FAQ
            </button>
            <button
              onClick={() => scrollTo("#schedule")}
              className="schedule-button"
            >
              SCHEDULE
            </button>
            <div className="hamburger-toggle">
              {/* <i className="fas fa-bars fa-lg"></i> */}
              <FontAwesomeIcon icon="fa-bars" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
