import React from "react"
import "../style/App.css"
import ToDo from "../components/ToDo"

import Layout from "../components/Layout"

function App() {
  return (
    <div className="App">
      <Layout>
        <ToDo />
      </Layout>
    </div>
  )
}

export default App
