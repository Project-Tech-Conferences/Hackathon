import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>ABOUT</button>
            <button onClick={() => scrollTo("#challenge")}>CHALLENGE</button>
            <button onClick={() => scrollTo("#sponsorship")}>SPONSORSHIP</button>
            <button onClick={() => scrollTo("#faq")}>faq</button>
            <button onClick={() => scrollTo("#schedule")}>schedule</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
