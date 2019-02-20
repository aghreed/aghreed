import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const navy = `#1B3C59`;
const lime = `#A6ED8E`;
const offWhite = `#F2F2F0`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 style={{ color: `${navy}`, textAlign: `center` }}>Alex G.H. Reed</h1>
    <div style={{ width: `300px`, height: `1px`, backgroundColor: `${navy}`, margin: `0 auto` }}></div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
