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
              <p>first place</p>
              <div className="wolframPrize">
                <img src={data.prizes[0].img} className="wolframLogo"></img>
                <p className="prize">Wolfram Award</p>
              </div>
              <img src={data.sponsors[1].img} className="password1"></img>
              <p className="prize">1PASSWORD AWARD $100 GIFT CARD</p>
            </div>
            <div className="challengeBox">
              <p>second place</p>
              <div className="wolframPrize">
                <img src={data.prizes[0].img} className="wolframLogo"></img>
                <p className="prize">Wolfram Award</p>
              </div>
              <p className="prize">& $50 GIFT CARD</p>
            </div>
            <div className="challengeBox">
              <p>third place</p>
              <div className="wolframPrize">
                <img src={data.prizes[0].img} className="wolfram1"></img>
                <p className="prize">Wolfram Award</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenges
