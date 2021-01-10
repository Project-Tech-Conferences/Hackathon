import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          {/* <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div> */}
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")} className="about-button">ABOUT</button>
            <button onClick={() => scrollTo("#challenge")}className="challenge-button">CHALLENGE</button>
            <button onClick={() => scrollTo("#sponsorship")}className="sponsors-button">
              SPONSORSHIP
            </button>
            <button onClick={() => scrollTo("#faq")}className="about-button">FAQ</button>
            <button onClick={() => scrollTo("#schedule")}className="about-button">SCHEDULE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
