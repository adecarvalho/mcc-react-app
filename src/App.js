import React, { Component } from "react"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Routes from "./route/route"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main id="appMain">
          <Routes />
        </main>

        <Footer />
      </React.Fragment>
    )
  }
}

export default App
