//libraries
import React, { useEffect } from "react"
//import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom"

//components
import Header from "./Header.js"

const App = () => {
  return (
    <Router>
      <div>
        <h1>hello world</h1>
        <Route exact path="/challenges" component={Header} />
        <Route path="/rules" />
        <Route path="/leaderboard" />
      </div>
    </Router>

    /*<div>
      <Header></Header>
    </div> */
  )
}

export default App
