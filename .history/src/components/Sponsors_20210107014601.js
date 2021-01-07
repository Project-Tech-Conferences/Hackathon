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
            {data.sponsors.map(sponsor => (
              <div className="sponsor" key={sponsor.id}>
                <img
                  src={sponsor.img}
                  alt="css"
                  className="image"
                  style={{
                    // gridColumnStart: `${sponsor.id % 2}`,
                    // gridColumnEnd: `${sponsor.id + 3}`,
                    gridArea: `${key}`,
                  }}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
