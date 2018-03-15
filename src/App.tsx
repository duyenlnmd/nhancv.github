import * as React from 'react'
import './App.css'
import Particles from 'react-particles-js'
import { Container, Row, Col } from 'reactstrap'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Particles className="App-particle" />
          <div className="App-header-body">
            <div className="App-logo" />
            <div className="App-header-info">
              <h2 className="App-title">Nhan Cao</h2>
              <h2 className="App-subtitle">Mobile Developer</h2>
              <h2 className="App-subtitle">nhancv92@gmail.com</h2>
            </div>
          </div>
        </header>

        <Container className="App-body">
          <section className="App-section">
            <h2>Abstract</h2>
            <p>
              A forward thinking developer offering more than three years of experience building, integrating, testing
              manage system. Especially mobile applications.
            </p>
            <b>Highlights</b>
            <br />
            <ul>
              <li>Good logic thinking skill</li>
              <li>Known for writing efficient, maintainable and reusable code</li>
              <li>Proficient in design pattern, algorithm data structures, problem-solving, and debugging</li>
              <li>Eagerness to embrace scalability, reliability, and performance challenges</li>
              <li>Deep understanding of the Android Java</li>
              <li>Passion for building products that users love.</li>
            </ul>
          </section>
          <section className="App-section">
            <h2>Education</h2>
            <p>
              B.Ce. (Honors) (Sept. 2010 – June. 2015): Computer Engineering, University of Information Technology,
              VNU-HCM, Vietnam
            </p>
            <div>GPA: 3.84/4 (Rank: 1/120). Thesis score: 9.7/10</div>
            <div>Thesis: SmartHome with Zigbee network</div>
          </section>
          <section className="App-section">
            <h2>Award</h2>
            <p>UIT Scholarship - 2010, 2011, 2012, 2013, 2014 - ranking Very Good</p>
            <p>Consolation Prize in National Olympic Contest for IT Student - 2012</p>
            <p>VNPT Scholarship 2012</p>
            <p>Nguyen Thai Binh Scholarship 2013</p>
            <p>POSCO ASIA Fellowship 2013</p>
            <p>JENESYS 2.0: JICE (Japan International Cooperation Center) 2014</p>
            <p>First Prize of UIT-ACM 2nd 2014</p>
            <p>First Prize of “Code to 23:00” competition - 2014</p>
            <p>
              Best Article Prize: Control smart home device by Infrared rays on android was public on Young Scientists
              Conference UIT 3rd, 2014
            </p>
            <p>Consolation Prize in National Olympic Contest for IT Student 2014</p>
            <p>Students of 5 merits of Ho Chi Minh city 2014</p>
            <p>Get highest honor of Computer Engineering Faculty in 20/06/2015</p>
          </section>
          <section className="App-section">
            <h2>Publication</h2>
            <div>
            <p>
              Best Article Prize: Control smart home device by Infrared rays on android was public on Young Scientists
              Conference UIT 3rd, 2014
            </p>
            </div>
          </section>
          <section className="App-section">
            <h2>Experience</h2>
            <div>
              <h6>24/02/2015 – 31/12/2015</h6>
              <div>Title: Android Developer</div>
              <div>Company: Left Coast Logic, VietNam</div>
              <div>Description:</div>
              <p>Develop and maintain the product at link: {' '}
                <a href="http://s.sunnypoint.jp/" target="_blank">http://sunnypoint.jp/</a><br/>
                SunnyPoint Android tablet for merchant, SunnyPoint Android mobile for customer.
              </p>
            </div>
            <div>-----</div>
            <div>
              <h6>01/01/2016 - 01/05/2016</h6>
              <div>Title: Software Consultant</div>
              <div>Company: Society for Health Information Systems Programmes, India (On site)</div>
              <div>Description:</div>
              <p>
                Support technical issues, development tasks, technical tasks, helping
                in recruitment of new people, building of systems and rules, clean system code,
                support and solve stuck in team,
                supervisor role.
              </p>
            </div>
            <div>-----</div>
            <div>
              <h6>27/08/2016 - present</h6>
              <div>Title: R&D Mobile</div>
              <div>Company: BeeSightSoft, VietNam</div>
              <div>Description:</div>
              <p>
                Team leader, Scrum master, Support, research and development, pilot and and transfer to developer.
              </p>
            </div>
            <div>-----</div>
            <div>
              <h6>01/04/2017 - present</h6>
              <div>Title: Software Consultant</div>
              <div>Company: Society for Health Information Systems Programmes, India (Remote)</div>
              <div>Description:</div>
              <p>
                Provide consultancy service to HISP regarding Software Development on various projects 
                located outside India.
              </p>
            </div>
          </section>
          <section className="App-section">
            <h2>Skills</h2>
            <div>
              <h6>Mobile</h6>
              <p>
                Android: Gradle Groovy, Kotlin, Java.<br/>
                  MVP model, Dagger2, Butterknife, Annotations, Event bus, RxAndroid/RxJava, jUnit, Espresso, Picasso,
                  Gson, Retrofit2, Realm, GGMaps, FB/G+/Twitter Sdk, Fabric, Mint, Log entries, BLE, NFC,
                  Amazon web services
              </p>
              <p>
                ReactNative:
                  ES6, Redux, Ignite, Nativebase, Reactotron, Immutable
              </p>
              <p>
                Flutter:
                  .... come soon ...
              </p>
              <div>-----</div>
              <h6>Web</h6>
              <p>
                Server: PHP (Laravel/Lumen), Java EE, C Embeded, NodeJs (ExpressJs)
              </p>
              <p>
                Frontend: Angular, React, Bootstrap, jQuery, TypeScript, Html, Css, 
                GraphQL, Wordpress, Magento, Gulp, Bower, Scss/Less, QUnitJs
              </p>
              <div>-----</div>
              <h6>OS/System</h6>
              <p>
              macOS, Linux, Windows, Nginx, Apache
              </p>
              <div>-----</div>
              <h6>Database</h6>
              <p>
                MySql, Sql Server, Sqlite, Realm, Postgres, DynamoDb
              </p>
              <div>-----</div>
              <h6>Embeded</h6>
              <p>
                Arduino, ARM, Raspberry Pi
              </p>
              <div>-----</div>
              <h6>Version control</h6>
              <p>
                Master git: GitHub, GitLab, Bitbucket
              </p>
              <div>-----</div>
              <h6>Others</h6>
              <p>
                Teamwork PM, Scrumdesk, Redmine, JIRA, Sketch, PS, Zeplin, Jenkins, CircleCI
              </p>
            </div>
          </section>
          <section className="App-section">
            <h2>Certification</h2>
            <div>
            <p>The 2012 ACM-ICPC Programming Contest Asia Hanoi Regional</p>
            <p>POSCO Asia Fellowship 2013</p>
            <p>The 2013 ACM-ICPC Programming Contest Asia Danang Regional</p>
            <p>Habitat for Humanity International - VietNam 2014</p>
            <p>JENESYS 2.0 - 2014</p>
            <p>Agile Software Development with Scrum - 2014</p>
            <p>The 2014 ACM-ICPC Programming Contest Vietnam National Round</p>
            <a href="https://goo.gl/avjkQL" target="_blank">
              [Link]
            </a>
            </div>
          </section>
          <section className="App-section">
            <h2>Hobby</h2>
            <div>
            <p>Algorithm</p>
            <p>Read IT books</p>
            <p>Travel</p>
            </div>
          </section>
          <section className="App-section">
            <h2>Social</h2>
            <div>
            <p>
              Github:{' '}
              <a href="https://github.com/nhancv" target="_blank">
                nhancv
              </a>
            </p>
            <p>
              Medium:{' '}
              <a href="https://medium.com/@nhancv" target="_blank">
                @nhancv
              </a>
            </p>
            <p>
              Upwork:{' '}
              <a href="https://www.upwork.com/fl/nhancao" target="_blank">
                nhancao
              </a>
            </p>
            <p>
              Twitter:{' '}
              <a href="https://twitter.com/nhancv" target="_blank">
                nhancv
              </a>
            </p>
            <p>
              Linkedin:{' '}
              <a href="https://www.linkedin.com/in/nhancv" target="_blank">
                nhancv
              </a>
            </p>
            <p>
              Stackoverflow:{' '}
              <a href="https://stackoverflow.com/users/5855770/nhan-cao" target="_blank">
                nhan-cao
              </a>
            </p>
            </div>
          </section>
          <section className="App-section">
            <h2>Contact</h2>
            <div>
            <p>
              Email: <a href="mailto: nhancv92@gmail.com">nhancv92@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+84964788440">(+84) 964 788 440</a>
            </p>
            </div>
          </section>
        </Container>

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
      </div>
    )
  }
}
