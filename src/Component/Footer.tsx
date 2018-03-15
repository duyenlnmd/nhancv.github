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
            <small>---- Nhan Cao ----</small>
            <br />
          </div>
          <br />
          <div className="App-products">
            /
            <a href="/product/order/" target="_blank">
              Order
            </a>/
            <a href="/product/rxjava/" target="_blank">
              RxJava
            </a>/
            <a href="/product/nqrcode/?d=data" target="_blank">
              NQRcode
            </a>/
            <a href="/product/BiometricsAuthentications.pdf" target="_blank">
              Biometrics Authentications
            </a>/
            <a href="/product/towerofhn.swf" target="_blank">
              Tower of HN
            </a>/
            <a href="/product/Android_Style.xml" download={true}>
              Android Style
            </a>
            /
          </div>
        </footer>
      </Container>
    )
  }
}
