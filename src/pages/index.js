import React from "react"
// import React from "react"
import ReactDOM from "react-dom"

import App from "../components/App.js"
import Header from "../components/Header"

import Layout from "../components/layout"
// // import SEO from "../components/seo"
// // Components

// import Header from "../components/Header"
// import About from "../components/about"
import Landing from "../components/Landing"
// import Challenges from "../components/Challenges"
// import Sponsors from "../components/Sponsors"
// import Countdown from "../components/Countdown"
// import Schedule from "../components/Schedule"
// import Faq from "../components/Faq"
// import "../components/FasIcons"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    {/* <App></App> */}
    {/* <Header></Header> */}
    <Landing></Landing>
    <Footer></Footer>
  </Layout>
  //   <Layout>
  //     <SEO title="Code Against Covid" />

  //     <Header></Header>
  //     {/* <Work></Work> */}
  //     {/* <Promotion></Promotion> */}
  //     <About></About>
  //     <Countdown></Countdown>
  //     <Challenges></Challenges>
  //     <Sponsors></Sponsors>
  //     <Faq></Faq>
  //     <Schedule></Schedule>
  //     <Footer></Footer>
  //   </Layout>
)

export default IndexPage

// ReactDOM.render(<App />, document.getElementById("root"))
