import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const navy = `#1B3C59`;
const lime = `#A6ED8E`;
const offWhite = `#F2F2F0`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `1280px` }}>
      <Image />
    </div>
    <div style={{ background: `${navy}`, width: `100%`, textAlign: `center` }}>
      <div style={{ padding: `3rem 0` }}>
        <h2 style={{ color: `${offWhite}`, marginBottom: `0.5em` }}>You can call me Alex.</h2>
        <h2 style={{ color: `${offWhite}`, marginBottom: `0.5em` }}>Or Reed.</h2>
        <h2 style={{ color: `${offWhite}`, marginBottom: `0.5em` }}>Most people just call me Reed.</h2>
      </div>
      <div style={{ width: `70%`, height: `1px`, backgroundColor: `${lime}`, margin: `0 auto` }}></div>
      <div style={{ maxWidth: `50%`, margin: `0 auto`, padding: `3rem 0` }}>
        <p style={{ color: `${offWhite}` }}>
          I'm a software developer based in New York City by way of Manhattan, Kansas and Omaha, Nebraska.
          I'm passionate about building intuitve and useful application that center human experiences.
          I like using technology purposefully, not just for technology's sake.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
