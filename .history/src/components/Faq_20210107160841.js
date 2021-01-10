import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Faq = () => {
  return (
    <div className="section">
      <div className="bb-container">
        <div className="cc-promotion-container">
          <Fade bottom cascade>
            <h1>FAQ</h1>
          </Fade>
          <div class="accordion">
  <div>
    <input type="radio" name="example_accordion" id="section1" class="accordion__input">
    <label for="section1" class="accordion__label">Section #1</label>
    <div class="accordion__content">
      <p>Section #1</p>
      <p>Lorem</p>
    </div>
  </div>
  </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
