import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Accordion from "../components/Accordion"

const Faq = () => {
  return (
    <div className="section">
      <div className="container"></div>
      <div className="cc-promotion-container">
        <Fade bottom cascade>
          <h1>FAQ</h1>
        </Fade>
        <div>
          <Accordion title="Question 1">
            <span className="accordion-text">aaaaaa</span>
          </Accordion>
          <Accordion title="Question 2">
            <span className="accordion-text">bbbbbb</span>
          </Accordion>
          <Accordion title="Question 3">
            <span className="accordion-text">cccccc</span>
          </Accordion>
          <Accordion title="Question 4">
            <span className="accordion-text">cccccc</span>
          </Accordion>
          <Accordion title="Question 5">
            <span className="accordion-text">cccccc</span>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Faq
