import React from "react"
import "../styles/nav.scss"
// client\src\styles\header.css

const Header = () => {
  return (
    <div className="section" id="home">
      <ul>
        <li>
          <a href="#">Challenges</a>
        </li>
        <li>
          <a href="#">Rules</a>
        </li>
        <li>
          <a href="#">Leaderboard</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
