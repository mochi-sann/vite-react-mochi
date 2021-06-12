import React from "react"
import ReactDOM from "react-dom"
import "./style/index.css"
import { Provider as ReduxProvider } from "react-redux"

import App from "./pages/_app"
import "virtual:windi.css"
import { store } from "./store/store"

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
