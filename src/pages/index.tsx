import React, { useState } from "react"
import logo from "../images/logo.svg"
import "../style/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>Hello Vite + React!</p>
        <p>
          <button
            className="p-2 min-w-50 bg-purple-800 duration-100 hover:bg-purple-900 focus:ring-4 rounded-lg"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
