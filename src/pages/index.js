import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { lime, navy, offWhite } from "../components/colors";

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
          I'm passionate about building intuitve and useful applications that center human experiences.
          I like using technology purposefully, not just for technology's sake.
        </p>
      </div>
      <div style={{ width: `70%`, height: `1px`, backgroundColor: `${lime}`, margin: `0 auto` }}></div>
      <div style={{ maxWidth: `50%`, margin: `0 auto`, padding: `3rem 0` }}>
        <h2 style={{ color: `${offWhite}`}}>Professional Work</h2>
        <p style={{ color: `${offWhite}` }}>
          Throughout my six years working in the field, I've had the opportunity
          of creating custom software in the startup, commercial and government domains. I value trust, quality communication, and a collaborative
          work environment. I believe in people over process. I enjoy working both closely with clients to best understand their needs and closely with
          my team so that we can deliver quality software that meets clients where they are at. With the help of talented mentors and co-workers, I've successfully done just that for the insurance,
          finance, communications, logistics, and geospatial industries.
        </p>
        <p style={{ color: `${offWhite}` }}>
          Head to my <Link to="/resume" style={{ color: `${lime}` }}>resume</Link> for a more in-depth look at my professional experience.
        </p>
      </div>
      <div style={{ width: `70%`, height: `1px`, backgroundColor: `${lime}`, margin: `0 auto` }}></div>
      <div style={{ maxWidth: `50%`, margin: `0 auto`, padding: `3rem 0` }}>
        <h2 style={{ color: `${offWhite}`}}>Side Work</h2>
        <p style={{ color: `${offWhite}` }}>
           I care deeply about the collaborative nature of technology, which is why I frequently attend (and occassionally speak at and volunteer at) meetups, conferences, workshops, and hackathons around the country. I love any excuse to experiment with a technology I'm unfamiliar with as much as I enjoy sharing something I'm well-versed in.
        </p>
        <p style={{ color: `${offWhite}` }}>
          Check out my <Link to="/side" style={{ color: `${lime}` }}>side work</Link> page for all the outside of nine-to-five stuff.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
