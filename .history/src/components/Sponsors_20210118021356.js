import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Sponsors = () => {
  return (
    <div className="section" id="sponsors">
      <div className="container">
        <div className="aa-container">
          <Fade bottom cascade>
            <h1>Sponsors</h1>
          </Fade>
          <div className="image-wrapper">
            {data.sponsors.map(sponsor => (
              <div className="sponsor" key={sponsor.id}>
                <img src={sponsor.img} alt="css" className></img>
              </div>
              //  ,console.log(`${sponsor.id}\n stop`)
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
