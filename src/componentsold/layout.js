/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Nav from "./Nav.js"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <main>{children}</main>
    </>
  )
}
export default Layout
