import React from "react"
import data from "../yourdata"

const Challenges = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Challenges</h1>
          <div className="skills-grid">
            <div className="challengeBox">
              <p>Challenge 1</p>
            </div>
            <div className="challengeBox">
              <p>Challenge2</p>
            </div>
            <div className="challengeBox">
              <p>Challenge 3</p>
            </div>
            {/* {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenges
