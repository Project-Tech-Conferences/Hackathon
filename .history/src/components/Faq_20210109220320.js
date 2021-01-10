import React from "react"
import Fade from "react-reveal/Fade"
// import data from "../yourdata"
import Accordion from "../components/Accordion"

const Faq = () => {
  return (
    <div className="section" id="faq">
      <div className="container">
        <div className="bb-container">
          <div className="cc-promotion-container">
            <Fade bottom cascade>
              <h1 className="faq-title">FAQ</h1>
            </Fade>
            <div>
              <Accordion title="Is there a fee to attend? ">
                <span className="accordion-text">aaaaaa</span>
              </Accordion>
              <Accordion title="What should I do if I don’t have a team?">
                <span className="accordion-text">bbbbbb</span>
              </Accordion>
              <Accordion title="What if I don’t have any coding/hackathon experience?  ">
                <span className="accordion-text">cccccc</span>
              </Accordion>
              <Accordion
                title="Who can participate? 
"
              >
                <span className="accordion-text">cccccc</span>
              </Accordion>
              <Accordion title="How many people can be in each team?">
                <span className="accordion-text">cccccc</span>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
