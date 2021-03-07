import * as React from 'react'
import './Header.css'
import { Container } from 'reactstrap'

export default class Header extends React.Component {
  render() {
    return (
      <header
        className="App-header"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="3000"
      >
        <Container className="App-header-body">
          <div className="App-header-info">
            <h2 className="App-title">Nhan Cao</h2>
            <h2 className="App-subtitle">Solutions Architect</h2>
            <h2 className="App-subtitle">nhancv92@gmail.com</h2>
            <h2 className="App-subtitle"><a href="http://nhancv.com" target="_blank" >nhancv.com</a></h2>
          </div>
        </Container>
        <div className="App-line" />
      </header>
    )
  }
}
