import React from "react"
import ReactDOM from "react-dom"
import "./style/index.css"
import App from "./pages"
import "virtual:windi.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
