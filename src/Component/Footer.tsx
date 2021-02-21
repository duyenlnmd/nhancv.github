import * as React from 'react'
import { Container } from 'reactstrap'
import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <footer className="App-footer">
          <div>
            <br />
            <small>---- @2021 Nhan Cao ----</small>
            <br />
          </div>
          <br />
          <div className="App-products">
            /
            <a href="/product/order/" target="_blank">
              Order
            </a>/
            <a href="/product/nqrcode/?d=https://nhancv.github.io/product/nhancv.pdf" target="_blank">
              NQRcode
            </a>/
            <a href="/product/nhancv.pdf" target="_blank">
              Resume-Pdf
            </a>
            /
          </div>
        </footer>
      </Container>
    )
  }
}
