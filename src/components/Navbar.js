import React from "react"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <nav>
            <ul class="nav-area">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Challenges</a>
              </li>
              <li>
                <a href="#">Rules</a>
              </li>
              <li>
                <a href="#">Leaderboard</a>
              </li>
              <li>
                <a href="#">Personal Leaderboard</a>
              </li>
            </ul>
          </nav>
          <a href="#" class="btn-area">
            Login
          </a>
          {/* <div className="links-wrapper">
            <a onClick={() => scrollTo("#about")}>ABOUT</a>
            <a onClick={() => scrollTo("#challenge")}>CHALLENGE</a>
            <a onClick={() => scrollTo("#sponsorship")}>SPONSORSHIP</a>
            <a onClick={() => scrollTo("#faq")}>FAQ</a>
            <a onClick={() => scrollTo("#schedule")}>SCHEDULE</a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
