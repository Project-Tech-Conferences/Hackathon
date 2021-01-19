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
                <span className="accordion-text">
                  No! This hackathon is free for all attendees
                </span>
              </Accordion>
              <hr>


              <Accordion title="What should I do if I don’t have a team?">
                <span className="accordion-text">
                  If you don’t have a team let us know in the registration form
                  and we will create a team for you!
                </span>
              </Accordion>
              <Accordion title="What if I don’t have any coding/hackathon experience?  ">
                <span className="accordion-text">
                  Don’t worry if you don’t have any coding/hackathon experience!
                  There will be many workshops throughout the hackathon and
                  mentors available to support you!
                </span>
              </Accordion>
              <Accordion title="Who can participate? ">
                <span className="accordion-text">
                  This hackathon is open to all middle and high school students!
                </span>
              </Accordion>
              <Accordion title="How many people can be in each team?">
                <span className="accordion-text">
                  Teams should be made up of 2 - 4 members!
                </span>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
