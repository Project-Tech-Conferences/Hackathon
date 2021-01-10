import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Accordion from "../components/Accordion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Faq = () => {
  return (
    <div className="section">
      <div className="bb-container">
        <div className="cc-promotion-container">
          <Fade bottom cascade>
            <h1>FAQ</h1>
          </Fade>
          <div>
            <Accordion title="A">
              <span className="accordion-text">aaaaaa</span>
            </Accordion>

            <Accordion title="B">
              <span className="accordion-text">bbbbbb</span>
            </Accordion>
            <Accordion title="C">
              <span className="accordion-text">cccccc</span>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
