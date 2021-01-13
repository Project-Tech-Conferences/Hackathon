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

              <li onClick={() => scrollTo("#about")} className="about-button">
                ABOUT
              </li>

            <a className="active">
              <li
                onClick={() => scrollTo("#challenges")}
                className="challenge-button"
              >
                CHALLENGE
              </li>
            </a>
            <a className="active">
              <li
                onClick={() => scrollTo("#sponsors")}
                className="sponsors-button"
              >
                SPONSORSHIP
              </li>
            </a>
            <a className="active">
              <li onClick={() => scrollTo("#faq")} className="faq-button">
                FAQ
              </li>
            </a>
            <a className="active">
              <li
                onClick={() => scrollTo("#schedule")}
                className="schedule-button"
              >
                SCHEDULE
              </li>
            </a>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
