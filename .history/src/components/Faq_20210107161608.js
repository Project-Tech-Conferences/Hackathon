import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Accordion from "../components/Accordion"

const Faq = () => {
  return (
    <div className="section">
      <div className="bb-container">
        <div className="cc-promotion-container">
          <Fade bottom cascade>
            <h1>FAQ</h1>
          </Fade>
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default Faq
