import React from "react"
import "../style/App.scss"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Layout from "../components/Layout"
import ToDo from "./ToDo"
import TextPage from "./testPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/test">
              <TextPage />
            </Route>
            <Route path="/">
              <ToDo />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App
