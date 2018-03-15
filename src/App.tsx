import * as React from 'react'
import { Footer, Header, Main } from './Component'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
