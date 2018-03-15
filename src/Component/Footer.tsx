import * as React from 'react'
import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
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
    )
  }
}
