import React from "react"

const Challenges = () => {
  return (
    <div className="section" id="challenges">
      <div className="container">
        <div className="skills-container">
          <h1>prizes</h1>
          <div className="skills-grid">
            <div className="challengeBox">
              <p style={{ textShadow: "13px 13px 6 #ff6830" }}>1st place</p>
              <p className="prize">$1900</p>
            </div>
            <div className="challengeBox">
              <p>2nd place</p>
              <p className="prize">$1700</p>
            </div>
            <div className="challengeBox">
              <p>3rd place</p>
              <p className="prize">$1600</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenges
