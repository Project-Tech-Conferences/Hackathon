/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import NavbarV2 from "./Nav.js"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <NavbarV2></NavbarV2>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  )
}
export default Layout
