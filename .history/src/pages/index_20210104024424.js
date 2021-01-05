import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Challenges from "../components/challenges"
import Sponsors from "../components/Sponsors"
import Promotion from "../components/Promotion"
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
    <Promotion></Promotion>
    <Challenges></Challenges>
    <Sponsors></Sponsors>
    <Faq></Faq>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
