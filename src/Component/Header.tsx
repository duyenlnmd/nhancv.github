import * as React from 'react'
import Particles from 'react-particles-js'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Particles
          className="App-particle"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              color: {
                value: '#ffffff'
              },
              shape: {
                type: 'triangle',
                stroke: {
                  width: 0,
                  color: '#7e8184'
                },
                polygon: {
                  nb_sides: 4
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 200,
                color: '#7e8184',
                opacity: 0.4,
                width: 0.5
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            }
          }}
        />
        <div
          className="App-header-body"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="3000"
        >
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
