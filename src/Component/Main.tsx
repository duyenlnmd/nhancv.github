import * as React from 'react'
import {Container} from 'reactstrap'
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
        let {header, title, company, description} = this.props;

        return (
            <div>
                <h5>{header}</h5>
                <div>{title}</div>
                <div>{company}</div>
                <div>Description:</div>
                <div dangerouslySetInnerHTML={{__html: description}}/>
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
        let {header, description} = this.props;

        return (
            <div>
                <h5>{header}</h5>
                <div dangerouslySetInnerHTML={{__html: description}}/>
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
        let {header, description} = this.props;

        return (
            <div>
                <h2>{header}</h2>
                <div dangerouslySetInnerHTML={{__html: description}}/>
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
                  A forward-thinking man passed several positions with wide knowledge cover almost aspect of the IT field, design a solution that fulfills the information and data architecture requirements. These technologies cover the entire life cycle of design, development, testing, deployment, maintenance, performance tuning, and user support.
                </p>
                <b>Highlights</b>
                <br />
                <ul>
                  <li>Good logic thinking skill.</li>
                  <li>Known for writing efficient, maintainable and reusable code.</li>
                  <li>Proficient in design pattern, algorithm data structures, problem-solving and debugging.</li>
                  <li>Eagerness to embrace scalability, reliability, and performance challenges.</li>
                  <li>Positivity and responsibility in words, communication, and feedback.</li>
                  <li>Time balance and creative management.</li>
                  <li>Passion for building products that users love.</li>
                  <li>Experienced in software design and application architectures with high security and performance optimization.</li>
                  <li>Strong at source code management, continuous integration, and continuous deployment.</li>
                  <li>Experienced and good knowledge of full-stack development e.g web front-end, backend-end to mobile and system.</li>
                  <li>Experienced in modern knowledge about Machine Learning, Artificial Intelligence, and Blockchain.</li>
                </ul>
              </div>
            `}
                    />
                </section>
                <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
                    <Simple
                        header={'Background'}
                        description={`
              <div>
                <p>
                  B.Ce. (Honors) (Sept. 2010 – June. 2015): Computer Engineering, University of Information Technology, VNU-HCM, Vietnam
                </p>
                <div>GPA: 3.84/4 (Rank: 1/120). Thesis score: 9.7/10</div>
                <div>Thesis: SmartHome with Zigbee network</div>
                <br/>
                <div>
                  Completed the Data Science Course (Nov 26, 2018 – Jan 29, 2019), Dr Tran Anh Tuan, Department of Maths & Computer Sciences, HCMUS.
                </div>
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
                        description={` 
              <p>
                Develop and maintain the E-commerce products for Japan market on Android mobile and tablet: Loyalty Program, Lottery, Save or Exchange Point, Payment, NFC, BLE/Beacon
              </p>
              <p>
                Application
              </p>
                  <ul>
                    <li>Android merchant: This application installed on a tablet for a merchant to manage employees and booking from user</li>
                    <li>Android user: This application installed on a phone for the user to book and savepoint</li>
                  </ul>
                        `}
                    />
                    <Experience
                        header={'01/01/2016 - 01/05/2016'}
                        title={'Software Consultant'}
                        company={'Society for Health Information Systems Programmes, India (On site)'}
                        description={`
              <p>
                Supervisor, technical support, development, and technical quality assessment, improve the development process.
              </p>
              <p>
                Application
              </p>
                  <ul>
                    <li>DHIS2 Core: Support implement to get a security certificate</li>
                    <li>DHIS2 Report: Support team to solve stuck in development</li>
                    <li>DHIS2 Android capture: Implement android project for data capture</li>
                  </ul>
                        `}
                    />
                    <Experience
                        header={'01/05/2016 - 01/08/2016'}
                        title={'Senior Android Developer'}
                        company={'RWD.sg, Singapore'}
                        description={`
             <p>
                Develop an android application to get cheapest price on the market
             </p>
             <p>
                Application
             </p>
                  <ul>
                    <li>Android wise price: Get cheapest price on the market using almost Amazon web services such as DynamoDB, S3, SES, SNS, Mobile Hub, Cognito and Lamda</li>
                  </ul>
                        `}
                    />
                    <Experience
                        header={'01/04/2017 - 01/01/2018'}
                        title={'Software Consultant'}
                        company={'Society for Health Information Systems Programmes, India (Remote)'}
                        description={`
             <p>
                Provide consultancy service to HISP regarding Software Development on various projects located outside India.
             </p>
             <p>
                Application
             </p>
                  <ul>
                    <li>DHIS2 Android capture: Implement android project for data capture</li>
                  </ul>
                        `}
                    />
                    <Experience
                        header={'27/08/2016 - present'}
                        title={'R&D Mobile'}
                        company={'Beesight Soft, Vietnam'}
                        description={`
             <p>
                Team leader, project lead, scrum master, technical support & documentation, research, and development.
             </p>
             <p>
                Training members
             </p>
                  <ul>
                    <li>Android native</li>
                    <li>React native</li>
                    <li>Flutter</li>
                    <li>AI & ML</li>
                  </ul>
             <p>
                R&D
             </p>
                  <ul>
                    <li>WebRTC</li>
                    <li>Kurento media server</li>
                    <li>XMPP with Ejabberd</li>
                    <li>OpenCV</li>
                    <li>Blockchain</li>
                    <li>Ethereum smartcontract</li>
                    <li>Omni USDT exchange</li>
                    <li>Face recognition</li>
                    <li>Face id</li>
                    <li>Chatbot</li>
                    <li>Recommendation system</li>
                    <li>oVirt cloud KVM virtualization</li>
                    <li>BPMN with Zeebe</li>
                  </ul>
             <p>
                Application
              </p>
                  <ul>
                    <li>Android FitAccess: Application for the gym, apply chat using XMPP</li>
                    <li>Android Socialoop: Social network, video effect</li>
                    <li>Android FeedMe: Exchange point, delivery</li>
                    <li>Android Tacko: Implement an online exchange market</li>
                    <li>React native Kawan Cicil: Instalment plan</li>
                    <li>React native Hanshan: Exchange money</li>
                    <li>React native Matme: Social network</li>
                    <li>React native Taxbase: Personal Tax management</li>
                    <li>Blockchain MVP: Medical testing management using Hyperledger Fabric</li>
                    <li>Flutter Beemon: Project monitor</li>
                    <li>Android Getogeda: Realtime game about face mask, video call, the effect on voice</li>
                    <li>Android Moblize: Social network, oil and gas tracking</li>
                  </ul>
                        `}
                    />
                </section>
                <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
                    <h2>Skills</h2>
                    <p>
                        <i>Not just a list.</i>
                    </p>

                    <div>
                        <Skill
                            header={'Mobile'}
                            description={`
              <p>
                Native Android: Gradle Groovy, Kotlin, Java. MVP model, Dagger2, Butterknife, Annotations, Event bus, RxAndroid/RxJava, jUnit, Espresso, Picasso, Gson, Retrofit2, Realm, GGMaps, FB/G+/Twitter Sdk, Fabric, Mint, Log entries, BLE, NFC, Amazon web services
              </p>
              <p>
                Cross-platform:
              </p>
                  <ul>
                    <li>Ionic: Angular</li>
                    <li>ReactNative: ES6, Redux, Ignite, Nativebase, Reactotron, Immutable</li>
                    <li>Flutter: Dart, Material Design</li>
                  </ul>
            `}
                        />
                        <Skill
                            header={'Web'}
                            description={`
              <p>
                Server: PHP (Laravel/Lumen), Java EE, C Embeded, XMPP (Ejabberd, Smack), NodeJs (ExpressJs, WebRTC, Kurento, Socket.io/Websocket), Redis, HAProxy, Spark, Hadoop, Kafka, ZeroMQ
              </p>
              <p>
                Frontend: Angular, ReactJS, Bootstrap, jQuery, TypeScript, Html, Css, GraphQL, Wordpress, Magento, Gulp, Bower, Scss/Less, QUnitJs
              </p>
            `}
                        />
                        <Skill
                            header={'Blockchain'}
                            description={`
              <p>
                Ethereum: SmartContract, ERC20 Token, ICO CrowdSale (Solidity + Web3)
              </p>
              <p>
                Tron: SmartContract, TRC20 Token, TRC10 Token
              </p>
              <p>
                Bitcoin: OMNI USDT exchange on bitcoin network
              </p>
              <p>
                Hyperledger Fabric: Backend with Java Sdk, chaincode with golang and deploy via Docker
              </p>
              <p>
                Hyperledger Iroha: Android app, Javascript wallet and Docker
              </p>
            `}
                        />
                        <Skill
                            header={'Bot'}
                            description={`
              <p>
                Wiki bot: use Dialogflow, NLP
              </p>
              <p>
                Immovables bot: work as a real estate agent
              </p>
              <p>
                Binary trading bot: automated trading with customizable strategy
              </p>
              <p>
                USDT exchange bot: automated fiat exchange USDT via telegram (support OMNI, ERC20, TRC20)
              </p>
              <p>
                ERC20 Token exchange bot: automated exchange Ethereum ERC20 Token via telegram
              </p>
              <p>
                Forex trading bot (MQL4/MQL5): signal alert, copy and automated trading with customizable strategy
              </p>
              <p>
                Binance future signal and scalping: Get the signal from admin, the bot will auto split the range of entry price for dca, and auto take profit when reaching the target
              </p>
              <p>
                Intermarket spread: Bot auto-detect intermarket spread and make an order to take a small profit.
              </p>
            `}
                        />
                        <Skill
                            header={'AI'}
                            description={`
              <p>
                Statistic, Data Mining, Machine learning and Deep learning, NPL, Bot
              </p>
              <p>
                Env & tool: Python, Colab, Nteract, Kaggle, Orange3, OpenCV, Tensorflow, Dialogflow, Dlib, Firebase ML
              </p>
            `}
                        />
                        <Skill
                            header={'OS/System'}
                            description={`
              <p>
                macOS, Linux, Windows, Nginx, Apache, KVM virtualization with oVirt
              </p>
            `}
                        />
                        <Skill
                            header={'Database'}
                            description={`
              <p>
                MySql, Sql Server, Sqlite, Realm, Postgres, DynamoDb, MongoDB
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
                Master of the Git: GitHub, GitLab, Bitbucket
              </p>
            `}
                        />
                        <Skill
                            header={'Others'}
                            description={`
              <p>
                Teamwork PM, Scrumdesk, Redmine, JIRA, Sketch, PS, Zeplin, Jenkins, CircleCI, Google Cloud, Unity AR (ARKit, Vuforia), Tsung
              </p>
            `}
                        />
                    </div>
                </section>
                <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
                    <Simple
                        header={'Hobby'}
                        description={`
              <div>
                <p>Algorithm</p>
                <p>Read IT books</p>
                <p>Your challenges</p>
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
                  Blog:
                  <a href="https://nhancv.com/" target="_blank">
                    nhancv.com
                  </a>
                </p>
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
                  <a href="https://www.upwork.com/o/profiles/users/~01a9bd982d453a6de1/" target="_blank">
                    nhancv
                  </a>
                </p>
                <p>
                  Freelancer.com:
                  <a href="https://www.freelancer.com/u/nhancv" target="_blank">
                    nhancv
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
                  <a href="https://stackoverflow.com/cv/nhancv" target="_blank">
                    nhan-cao
                  </a>
                </p>
                <p>
                  NpmJs:
                  <a href="https://www.npmjs.com/~nhancv" target="_blank">
                    ~nhancv
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
