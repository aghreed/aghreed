import React from "react"
import Image from "../components/image"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { navy, offWhite } from "../components/colors";

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div style={{ maxWidth: `1280px`}}>
      <Image />
    </div>
    <h1 style={{ textAlign: `center`, marginTop: `1em` }}>Professional Work</h1>
    {/* Flyover Technical */}
    <section style={{ padding: `0.25rem 0`, maxWidth: `1280px`, color: `${offWhite}`, background: `${navy}` }}>
      <div style={{ margin: `2rem 4rem` }}>
        <div style={{ display: `flex`, justifyContent: `flex-start`, alignItems: `baseline` }}>
          <h2 style={{ marginBottom: 0 }}>Flyover Technical</h2>
          <h4 style={{ marginLeft: `0.5rem`, marginBottom: 0 }}>Senior Consultant</h4>
        </div>
        <div style={{ display: `flex`, justifyContent: `space-between` }}>
          <h4>Omaha, NE</h4>
          <h4 style={{ marginRight: `2rem` }}>April 2017 - December 2018</h4>
        </div>
      </div>
      <div style={{ margin: `2rem 6rem` }}>
        <h3>Role and Responsibilities</h3>
        <ul style={{ marginLeft: `3rem` }}>
          <li>Augment the technical staff of the Retirement Plans Division at Mutual of Omaha</li>
          <li>Assimilate to and participate in team Agile practices</li>
          <li>Lead front-end design and development</li>
          <li>Develop internal library of resuable UI components</li>
          <li>Contribute to back-end design and development</li>
          <li>Collaborate closely with product owners, designers, and business analysts</li>
          <li>Maintain and support internal and external applications through multiple release cycles</li>
        </ul>
      </div>
      <div style={{ margin: `2rem 6rem` }}>
        <h3>Technologies Used</h3>
        <div>
          <h5 style={{ margin: `0.5rem 2rem`}}>Front-End</h5>
          <p style={{ marginLeft: `3rem`}}>Typescript, React, Redux, Webpack, Babel, Semantic-UI, Enzyme</p>
          <h5 style={{ margin: `0.5rem 2rem`}}>Back-End</h5>
          <p style={{ marginLeft: `3rem`}}>Groovy, Spring Boot, Zuul</p>
          <h5 style={{ margin: `0.5rem 2rem`}}>Architectural Patterns</h5>
          <p style={{ marginLeft: `3rem`}}>SPA, REST, OAuth, Microservices</p>
        </div>
      </div>
    </section>
    {/* Object Partners, Inc */}
    {/* Aviture, Inc */}
  </Layout>
)

export default Resume
