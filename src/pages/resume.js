import React from "react"
import Image2 from "../components/image2"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { navy, offWhite, lime } from "../components/colors";

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div style={{ maxWidth: `1280px`, margin: `0 auto` }}>
      <Image2 />
    </div>
    <h1 style={{ textAlign: `center`, marginTop: `1em`, fontVariant: `small-caps` }}>resume</h1>
    {/* Flyover Technical */}
    <section style={{ padding: `0.25rem 0`, color: `${navy}`, background: `${offWhite}` }}>
      <div style={{ margin: `0 auto`, maxWidth: `1040px` }}>
        <div style={{ margin: `4rem 4rem 1rem` }}>
          <div style={{ display: `flex`, justifyContent: `flex-start`, alignItems: `baseline` }}>
            <h2 style={{ marginBottom: `0.25rem` }}>
              <a href="http://www.flyovertechnical.com" target="_blank" rel="noopener noreferrer" style={{ color: `${navy}`}}>Flyover Technical</a>
            </h2>
            <h4 style={{ marginLeft: `0.5rem`, marginBottom: `0.25rem` }}>Senior Consultant</h4>
          </div>
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <h4>Omaha, NE</h4>
            <h4 style={{ marginRight: `2rem` }}>April 2017 - December 2018</h4>
          </div>
        </div>
        <div style={{ margin: `1rem 6rem` }}>
          <h3>Roles and Responsibilities</h3>
          <ul style={{ marginLeft: `3rem` }}>
            <li>Augment the technical staff of the Retirement Plans Division at Mutual of Omaha</li>
            <li>Advocate for and actively particpant in team Agile/Scrum practices</li>
            <li>Collaborate closely with product owners, architects, designers, and business analysts</li>
            <li>Lead front-end app design and development</li>
            <li>Contribute to back-end design and development</li>
            <li>Develop internal library of resuable UI components</li>
            <li>Maintain and support internal and external applications through multiple release cycles</li>
          </ul>
        </div>
        <div style={{ margin: `2rem 6rem` }}>
          <h3>Technologies Used</h3>
          <div>
            <h5 style={{ margin: `0.5rem 2rem`}}>Client</h5>
            <p style={{ marginLeft: `3rem`}}>Typescript, React, Redux, Webpack, Babel, Lerna, Rollup, Semantic-UI, SASS, Jest + Enzyme, NightmareJS</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Server</h5>
            <p style={{ marginLeft: `3rem`}}>Groovy, Spring Boot, Zuul, Node, Hapi</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Database</h5>
            <p style={{ marginLeft: `3rem`}}>SQL/SQLite, MongoDB</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Architectural Patterns</h5>
            <p style={{ marginLeft: `3rem`}}>SPA, REST, OAuth, Monorepos, Microservices, Microclients</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Infrastructure / DevOps</h5>
            <p style={{ marginLeft: `3rem`}}>Git, npm, yarn, Artifactory, Docker, Jenkins, JIRA, BitBucket</p>
          </div>
        </div>
      </div>
    </section>
    {/* Object Partners, Inc */}
    <section style={{ padding: `0.25rem 0`, color: `${navy}`, background: `${lime}` }}>
      <div style={{ margin: `0 auto`, maxWidth: `1040px` }}>
        <div style={{ margin: `4rem 4rem 1rem` }}>
          <div style={{ display: `flex`, justifyContent: `flex-start`, alignItems: `baseline` }}>
            <h2 style={{ marginBottom: `0.25rem` }}><a href="http://www.objectpartners.com" target="_blank" rel="noopener noreferrer" style={{ color: `${navy}` }}>Object Partners, Inc</a></h2>
            <h4 style={{ marginLeft: `0.5rem`, marginBottom: `0.25rem` }}>Senior Consultant</h4>
          </div>
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <h4>Omaha, NE</h4>
            <h4 style={{ marginRight: `2rem` }}>January 2015 - December 2016</h4>
          </div>
        </div>
        <div style={{ margin: `1rem 6rem` }}>
          <h3>West Corporation</h3>
          <h4 style={{ marginLeft: `1.5rem` }}>Roles and Responsibilities</h4>
          <ul style={{ marginLeft: `3rem` }}>
            <li>Augment the technical staff of West Corporation</li>
            <li>Advocate for and actively particpant in team Agile/Scrum practices</li>
            <li>Collaborate closely with on-site and remote product owners, designers, business analysts, developers, and quality assurers</li>
            <li>Demonstrate sprint progress to stakeholders</li>
            <li>Lead front-end app design and development</li>
            <li>Develop internal library of resuable UI components</li>
            <li>Contribute to REST API design and development</li>
            <li>Deploy and support internal applications through multiple release cycles</li>
          </ul>
          <h4 style={{ marginLeft: `1.5rem` }}>Technologies Used</h4>
          <div>
            <h5 style={{ margin: `0.5rem 2rem`}}>Client</h5>
            <p style={{ marginLeft: `3rem`}}>React, Redux, Webpack, Babel, Bootstrap, LESS, Karma + Jasmine + Sinon</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Server</h5>
            <p style={{ marginLeft: `3rem`}}>Node, Hapi, Apache</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Architectural Patterns</h5>
            <p style={{ marginLeft: `3rem`}}>SPA, REST, OAuth, Microservices, Microclients</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Infrastructure / DevOps</h5>
            <p style={{ marginLeft: `3rem`}}>Jenkins, npm, yarn, TeamCity, JIRA, BitBucket, GitLab</p>
          </div>
          <h3>TD Ameritrade</h3>
          <h4 style={{ marginLeft: `1.5rem` }}>Roles and Responsibilities</h4>
          <ul style={{ marginLeft: `3rem` }}>
            <li>Augment the technical staff of TD Ameritrade</li>
            <li>Assimilate to and actively particpate in team Agile/Scrum practices</li>
            <li>Present sprint progress to stakeholders</li>
            <li>Lead front-end design and development</li>
            <li>Contribute to REST API design</li>
            <li>Collaborate closely with on-site and remote product owners, designers, business analysts, developers, and quality assurers</li>
            <li>Deploy and support an internal application through multiple release cycles</li>
          </ul>
          <h4 style={{ marginLeft: `1.5rem` }}>Technologies Used</h4>
          <div>
            <h5 style={{ margin: `0.5rem 2rem`}}>Client</h5>
            <p style={{ marginLeft: `3rem`}}>AngularJS, UI-Router, Bootstrap, Gulp, Mocha</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Server</h5>
            <p style={{ marginLeft: `3rem`}}>Node, Express, Hapi</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Architectural Patterns</h5>
            <p style={{ marginLeft: `3rem`}}>SPA, REST</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Infrastructure / DevOps</h5>
            <p style={{ marginLeft: `3rem`}}>Git, npm, TeamCity, JIRA, BitBucket</p>
          </div>
        </div>
      </div>
    </section>
    {/* Aviture, Inc */}
    <section style={{ padding: `0.25rem 0`, color: `${offWhite}`, background: `${navy}` }}>
      <div style={{ margin: `0 auto`, maxWidth: `1040px` }}>
        <div style={{ margin: `4rem 4rem 1rem` }}>
          <div style={{ display: `flex`, justifyContent: `flex-start`, alignItems: `baseline` }}>
            <h2 style={{ marginBottom: `0.25rem` }}><a href="http://www.aviture.us.com" target="_blank" rel="noopener noreferrer" style={{ color: `${offWhite}`}}>Aviture, Inc</a></h2>
            <h4 style={{ marginLeft: `0.5rem`, marginBottom: `0.25rem` }}>Software Developer</h4>
          </div>
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <h4>Omaha, NE</h4>
            <h4 style={{ marginRight: `2rem` }}>February 2013 - January 2015</h4>
          </div>
        </div>
        <div style={{ margin: `1rem 6rem` }}>
          <h3>Roles and Responsibilities</h3>
          <ul style={{ marginLeft: `3rem` }}>
            <li>Define, design, and develop custom software solutions for clients in-house</li>
            <li>Actively particpate in team Agile/Scrum practices</li>
            <li>Present technical progress to project stakeholders</li>
            <li>Gain experience with emerging web standards and technologies</li>
            <li>Collaborate closely with clients, designers, quality assurers, and subject matter experts</li>
          </ul>
        </div>
        <div style={{ margin: `2rem 6rem` }}>
          <h3>Technologies Used</h3>
          <div>
            <h5 style={{ margin: `0.5rem 2rem`}}>Client</h5>
            <p style={{ marginLeft: `3rem`}}>AngularJS, Backbone, JQuery, Bootstrap, Semantic-UI, SVG, Leaflet, Cesium, Grunt, Gulp, LESS, SASS, Mocha, Jasmine, Chai</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Server</h5>
            <p style={{ marginLeft: `3rem`}}>Java, Spring, Node, Express</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Database</h5>
            <p style={{ marginLeft: `3rem`}}>SQL, MongoDB</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Architectural Patterns</h5>
            <p style={{ marginLeft: `3rem`}}>SPA, REST</p>
            <h5 style={{ margin: `0.5rem 2rem`}}>Infrastructure / DevOps</h5>
            <p style={{ marginLeft: `3rem`}}>Git, SVN, npm, bower, Jenkins, JIRA, Pivotal Tracker, BitBucket, Basecamp</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Resume