import React from "react"
import ReactDOM from "react-dom"
import "./style/index.css"
import { Provider as ReduxProvider } from "react-redux"
import { RecoilRoot } from "recoil"

import App from "./pages/_app"
import "virtual:windi.css"
import { store } from "./store/store"

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
)
