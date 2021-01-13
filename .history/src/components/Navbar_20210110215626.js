import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "font-awesome/css/font-awesome.min.css"
// import "../node_modules/font-awesome/css/font-awesome.min.css"

const Navbar = () => {
  useState([navLinkOpen, navLinkToggle]) = useState(false)
  const handleNavLinksToggle = () => {
    navLinktoggle(!navLinkOpen)
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
