import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const toggleButton = () => {
  let element = document.getElementById("button")
  ReactDOM.findDOMNode(element).style.backgroundColor = this.state.isClicked
    ? "black"
    : "white"
}

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
          </div>
          <button className="toggle-button" onClick={toggleButton}>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
