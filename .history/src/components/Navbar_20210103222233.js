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
            <button onClick={() => scrollTo("#about")}>Work</button>
            <button onClick={() => scrollTo("#challenge")}>About</button>
            <button onClick={() => scrollTo("#sponsorship")}>Contact</button>
            <button onClick={() => scrollTo("#faq")}>Contact</button>
            <button onClick={() => scrollTo("#schedule")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
