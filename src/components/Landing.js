import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Landing = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="landingContainer">
          <div className="aboutPTC">
            <div className="aboutTitle">
              <h2>About PTC</h2>
            </div>
            <p className="welcomeContent">{data.aboutParaOne}</p>
            <p className="welcomeContent">{data.aboutParaTwo}</p>
          </div>

          <div className="codingChallenge">
            <div className="whatTitle">
              <h2>What is PTC's Coding Challenge?</h2>
            </div>
            <p className="welcomeContent">{data.whatParaOne}</p>
          </div>

          <div className="learningGrowth">
            <div className="learningTitle">
              <h2>Learning and Growth</h2>
            </div>
            <p className="welcomeContent">{data.learningParaOne}</p>
            <ul>
              <li>{data.learningParaTwo}</li>
              <li>{data.learningParaThree}</li>
            </ul>
          </div>

          <div className="getStarted">
            <div className="getStartedTitle">
              <h2>Get Started</h2>
            </div>
            <p className="welcomeContent">{data.learningParaOne}</p>
            <ol>
              <li>
                {data.getStartedParaTwo}
                <a href="">Account</a>
              </li>
              <li>
                {data.getStartedParaThree}
                <a href="">Rules</a>
              </li>
              <li>
                {data.getStartedParaTwo}
                <a href="">Challenges</a>
              </li>
              <li>
                {data.getStartedParaThree}
                <a href="">Leaderboard</a>
              </li>
            </ol>
          </div>

          <div className="ptcMedia">
            <div className="ptcMediaTitle">
              <h2>PTC Media</h2>
            </div>
            <p className="welcomeContent">{data.ptcMediaParaOne}</p>
            <a href="">instagram</a>
            <a href="">tiktok</a>
            <a href="">linkedin</a>
          </div>
        </div>
      </div>
    </div>

    // <div className="section" id="about">
    //   <div className="container">
    //     <div className="about-section">
    //       {/* <div className="content"> */}
    //       <Fade bottom cascade>
    //         <h1>Code for Covid</h1>
    //       </Fade>
    //       <p className="about-content">{data.aboutParaOne}</p>
    //       <a className="signUp" href="youtube.com">
    //         SIGN UP
    //       </a>
    //     </div>

    //     {/* </div> */}
    //   </div>
    // </div>
  )
}

export default Landing
