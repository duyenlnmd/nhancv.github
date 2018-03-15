import * as React from 'react'
import Particles from 'react-particles-js'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Particles className="App-particle" />
        <div className="App-header-body" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="3000">
          <div className="App-logo" />
          <div className="App-header-info">
            <h2 className="App-title">Nhan Cao</h2>
            <h2 className="App-subtitle">Mobile Developer</h2>
            <h2 className="App-subtitle">nhancv92@gmail.com</h2>
          </div>
        </div>
      </header>
    )
  }
}
