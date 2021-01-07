import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import blue from "../images/blue.png"

const Sponsors = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="aa-container">
          <Fade bottom cascade>
            <h1>Sponsors</h1>
          </Fade>
          <div className="image-wrapper">
          {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
            {/* <img src={data.sponsors.img}></img> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
