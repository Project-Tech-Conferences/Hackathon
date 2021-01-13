import React, { Component } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
    }
  }
  handleToggle(e) {
    e.preventDefault()
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
  render() {
    const { isExpanded } = this.state

    return (
      <div className="nav-container">
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <div activeClassName="active"></div>
            <li onClick={() => scrollTo("#about")} className="about-button">
              ABOUT
            </li>
            <i activeClassName="active" to="/about"></i>
            <li
              onClick={() => scrollTo("#challenges")}
              className="challenge-button"
            >
              CHALLENGE
            </li>
            <i activeClassName="active"></i>
            <li
              onClick={() => scrollTo("#sponsors")}
              className="sponsors-button"
            >
              SPONSORSHIP
            </li>
            <li onClick={() => scrollTo("#faq")} className="faq-button">
              FAQ
            </li>
            <li
              onClick={() => scrollTo("#schedule")}
              className="schedule-button"
            >
              SCHEDULE
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
