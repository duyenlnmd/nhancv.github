import * as React from 'react'
import './App.css'
import Particles from 'react-particles-js'
import { Button } from 'reactstrap'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Particles className="App-particle" />

          <div className="App-header-body">
            <div className="App-logo" />
            <div className="App-header-info">
              <h1 className="App-title">Nhan Cao</h1>
              <h2 className="App-subtitle">Mobile Developer</h2>
              <h2 className="App-subtitle">nhancv92@gmail.com</h2>
            </div>
          </div>
        </header>
        <div className="App-body">
          <section className="App-abstract">Abstract</section>
          <section className="App-education">Education</section>
          <section className="App-award">Award</section>
          <section className="App-publication">Publication</section>
          <section className="App-publication">Publication</section>
          <section className="App-experience">Skills</section>
          <section className="App-experience">
            Work Experience (time, position, company, project)
          </section>
          <section className="App-certification">Certification</section>
          <section className="App-hobby">Hobby</section>
          <section className="App-social">Social</section>
          <section className="App-contact">Contact</section>
        </div>

        <footer className="App-footer">
          <div>
            <br />
            <small>---- Nhan Cao ----</small>
            <br />
          </div>
          <br />
          <div className="App-products">
            <a>Order</a>/
            <a>Report</a>/
          </div>
        </footer>
        <div>
          <Button
            color="primary"
            onClick={() => {
              console.log('hello')
            }}
          >
            Hello
          </Button>
        </div>
      </div>
    )
  }
}
