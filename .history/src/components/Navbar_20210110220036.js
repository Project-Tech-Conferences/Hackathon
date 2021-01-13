import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "font-awesome/css/font-awesome.min.css"
// import "../node_modules/font-awesome/css/font-awesome.min.css"

const Navbar = () => {
  const [navLinkOpen, navLinkToggle] = useState(false)
  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen)
  }

  const renderClasses = () => {
    let classes = "navlinks"
    if (navLinkOpen) {
      classes += "active"
    }
    return classes
  }
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="hamburger-toggle">
            <i className="fa fa-bars fa-lg"></i>
          </div>
          {/* <div className="links-wrapper"> */}
          <div className={renderClasses()}>
            <a onClick={() => scrollTo("#about")} className="about-button">
              ABOUT
            </a>
            <a
              onClick={() => scrollTo("#challenges")}
              className="challenge-button"
            >
              CHALLENGE
            </a>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
