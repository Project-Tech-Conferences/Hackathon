import React from "react"
// import "../styles/header.css";
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
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      {/* <div className="container">
        <div className="header-wrapper">
          <div className="menu">
            <h1>Challenges</h1>
            <h1>Rules</h1>
            <h1>Leaderboard</h1>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Header
