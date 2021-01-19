import React from "react"
import data from "../yourdata"

const Challenges = () => {
  return (
    <div className="section" id="challenges">
      <div className="container">
        <div className="skills-container">
          <h1>prizes</h1>
          <div className="skills-grid">
            <div className="challengeBox">
              <div className="wolframPrize"></div>
              <p>first place</p>
              <img src={data.prizes[0].img} className="wolfram1"></img>
              <img src={data.sponsors[1].img} className="password1"></img>
              <p className="prize">Wolfram Award</p>
              <p className="prize">1PASSWORD AWARD $100 GIFT CARD</p>
            </div>
            <div className="challengeBox">
              <p>second place</p>
              <img src={data.prizes[0].img} className="wolfram2"></img>
              <p className="prize">Wolfram Award</p>
              <p className="prize">& $50 GIFT CARD</p>
            </div>
            <div className="challengeBox">
              <p>third place</p>
              <img src={data.prizes[0].img} className="wolfram2"></img>
              <p className="prize">Wolfram Award</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenges
