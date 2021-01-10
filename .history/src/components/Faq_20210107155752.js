import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Faq = () => {
  return (
    <div className="section">
      <div className="bb-container">
        <div className="1promotion-container">
          <Fade bottom cascade>
            <h1>FAQ</h1>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Faq
