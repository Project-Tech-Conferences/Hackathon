import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Challenges from "../components/challenges"
import Sponsors from "../components/Sponsors"
import Countdown from "../components/Countdown"
import Schedule from "../components/Schedule"
import Faq from "../components/Faq"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="PTC Hacks" />
    <Header></Header>
    {/* <Work></Work> */}
    {/* <Promotion></Promotion> */}
    <About></About>
    <Countdown></Countdown>
    <Challenges></Challenges>
    <Sponsors></Sponsors>
    <Faq></Faq>
    <Schedule></Schedule>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
