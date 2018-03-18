import * as React from 'react'
import { Container } from 'reactstrap'
import './Main.css'

// @nhancv: Experience Block
interface ExperienceProps {
  header: string
  title: string
  company: string
  description: string
}
class Experience extends React.Component<ExperienceProps, {}> {
  render() {
    let { header, title, company, description } = this.props

    return (
      <div>
        <h5>{header}</h5>
        <div>{title}</div>
        <div>{company}</div>
        <div>Description:</div>
        <p>{description}</p>
        <div>-----</div>
      </div>
    )
  }
}

// @nhancv: Skill block
interface SkillProps {
  header: string
  description: string
}
class Skill extends React.Component<SkillProps, {}> {
  render() {
    let { header, description } = this.props

    return (
      <div>
        <h5>{header}</h5>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div>-----</div>
      </div>
    )
  }
}

// @nhancv: Simple block
interface SimpleProps {
  header: string
  description: string
}
class Simple extends React.Component<SimpleProps, {}> {
  render() {
    let { header, description } = this.props

    return (
      <div>
        <h2>{header}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    )
  }
}

export default class Main extends React.Component {
  render() {
    return (
      <Container className="App-body">
        <section className="App-section" data-aos="fade-up" data-aos-duration="4000">
          <Simple
            header={'Abstract'}
            description={`
              <div>
                <p>
                  A forward thinking developer offering more than three years of experience building, integrating, testing manage system. Especially mobile applications.
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
              </div>
            `}
          />
        </section>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <Simple
            header={'Education'}
            description={`
              <div>
                <p>
                B.Ce. (Honors) (Sept. 2010 – June. 2015): Computer Engineering, University of Information Technology,
                VNU-HCM, Vietnam
                </p>
                <div>GPA: 3.84/4 (Rank: 1/120). Thesis score: 9.7/10</div>
                <div>Thesis: SmartHome with Zigbee network</div>
              </div>
            `}
          />
        </section>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <Simple
            header={'Award'}
            description={`
              <div>
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
              </div>
            `}
          />
        </section>
        <section className="App-section" data-aos="fade-up" data-aos-duration="4000">
          <Simple
            header={'Publication'}
            description={`
              <div>
                <p>
                  Best Article Prize: Control smart home device by Infrared rays on android was public on Young Scientists
                  Conference UIT 3rd, 2014
                </p>
              </div>
            `}
          />
        </section>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <h2>Experience</h2>
          <Experience
            header={'24/02/2015 – 31/12/2015'}
            title={'Android Developer'}
            company={'Left Coast Logic, VietNam'}
            description={`Develop and maintain the E-commerce products for Japan market on Android mobile and table: Loyalty Program, Lottery, Point, Payment, NFC, BLE/Beacon iOS.`}
          />
          <Experience
            header={'01/01/2016 - 01/05/2016'}
            title={'Software Consultant'}
            company={'Society for Health Information Systems Programmes, India (On site)'}
            description={`Support technical issues, development tasks, technical tasks, helping in recruitment of new people, building of systems and rules, clean system code, support and solve stuck in team, supervisor role.`}
          />
          <Experience
            header={'01/04/2017 - 01/01/2018'}
            title={'Software Consultant'}
            company={'Society for Health Information Systems Programmes, India (Remote)'}
            description={`Provide consultancy service to HISP regarding Software Development on various projects located outside India.`}
          />
          <Experience
            header={'27/08/2016 - present'}
            title={'R&D Mobile'}
            company={'BeeSightSoft, VietNam'}
            description={`Team leader, Scrum master, Support, research and development, pilot and and transfer to developer.`}
          />
        </section>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <h2>Skills</h2>
          <p>
            <i>Not just a list. It's Real.</i>
          </p>

          <div>
            <Skill
              header={'Mobile'}
              description={`
              <p>
                Native Android: Gradle Groovy, Kotlin, Java. MVP model, Dagger2, Butterknife, Annotations, Event bus, RxAndroid/RxJava, jUnit, Espresso, Picasso, Gson, Retrofit2, Realm, GGMaps, FB/G+/Twitter Sdk, Fabric, Mint, Log entries, BLE, NFC, Amazon web services.
              </p>
              <p>
                Cross-platform:
              </p>
                  <ul>
                    <li>Ionic: Angular.</li>
                    <li>ReactNative: ES6, Redux, Ignite, Nativebase, Reactotron, Immutable.</li>
                    <li>Flutter: Dart, Material Design.</li>
                  </ul>
            `}
            />
            <Skill
              header={'Web'}
              description={`
              <p>
                Server: PHP (Laravel/Lumen), Java EE, C Embeded, NodeJs (ExpressJs), WebRTC, Kurento, Socket.io, XMPP (Ejabberd, Smack)
              </p>
              <p>
                Frontend: Angular, React, Bootstrap, jQuery, TypeScript, Html, Css, GraphQL, Wordpress, Magento, Gulp, Bower, Scss/Less, QUnitJs
              </p>
            `}
            />
            <Skill
              header={'OS/System'}
              description={`
              <p>
                macOS, Linux, Windows, Nginx, Apache
              </p>
            `}
            />
            <Skill
              header={'Database'}
              description={`
              <p>
                MySql, Sql Server, Sqlite, Realm, Postgres, DynamoDb
              </p>
            `}
            />
            <Skill
              header={'Embeded'}
              description={`
              <p>
                Atmel, Arduino, ARM, Raspberry Pi
              </p>
            `}
            />
            <Skill
              header={'Version control'}
              description={`
              <p>
                Master git: GitHub, GitLab, Bitbucket
              </p>
            `}
            />
            <Skill
              header={'Others'}
              description={`
              <p>
                Teamwork PM, Scrumdesk, Redmine, JIRA, Sketch, PS, Zeplin, Jenkins, CircleCI, Google Cloud, Unity AR (ARKit, Vuforia)
              </p>
            `}
            />
          </div>
        </section>
        <section className="App-section" data-aos="fade-up" data-aos-duration="4000">
          <Simple
            header={'Certification'}
            description={`
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
            `}
          />
        </section>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <Simple
            header={'Hobby'}
            description={`
              <div>
                <p>Algorithm</p>
                <p>Read IT books</p>
                <p>Travel</p>
              </div>
            `}
          />
        </section>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <Simple
            header={'Social'}
            description={`
              <div>
                <p>
                  Github:
                  <a href="https://github.com/nhancv" target="_blank">
                    nhancv
                  </a>
                </p>
                <p>
                  Medium:
                  <a href="https://medium.com/@nhancv" target="_blank">
                    @nhancv
                  </a>
                </p>
                <p>
                  Upwork:
                  <a href="https://www.upwork.com/fl/nhancao" target="_blank">
                    nhancao
                  </a>
                </p>
                <p>
                  Twitter:
                  <a href="https://twitter.com/nhancv" target="_blank">
                    nhancv
                  </a>
                </p>
                <p>
                  Linkedin:
                  <a href="https://www.linkedin.com/in/nhancv" target="_blank">
                    nhancv
                  </a>
                </p>
                <p>
                  Stackoverflow:
                  <a href="https://stackoverflow.com/users/5855770/nhan-cao" target="_blank">
                    nhan-cao
                  </a>
                </p>
              </div>
            `}
          />
        </section>
        <section className="App-section" data-aos="fade-up" data-aos-duration="4000">
          <Simple
            header={'Contact'}
            description={`
              <div>
                <p>
                  Email: <a href="mailto: nhancv92@gmail.com">nhancv92@gmail.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+84964788440">(+84) 964 788 440</a>
                </p>
              </div>
            `}
          />
        </section>
      </Container>
    )
  }
}
