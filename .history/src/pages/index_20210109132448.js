import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import About from "../components/about"
import Challenges from "../components/Challenges"
import Sponsors from "../components/Sponsors"
import Countdown from "../components/Countdown"
import Schedule from "../components/Schedule"
import Faq from "../components/Faq"

import Footer from "../components/Footer"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

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
    {/* <Footer></Footer> */}
  </Layout>
)

export default IndexPage
