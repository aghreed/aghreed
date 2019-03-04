import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { lime, navy, offWhite } from "../components/colors";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `resume`, `portfolio`, `aghreed`]} />
    <div style={{ maxWidth: `1280px`, margin: `0 auto` }}>
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
          I'm a software developer based in Brooklyn, New York by way of Omaha, Nebraska and Manhattan, Kansas. I'm passionate about building intuitive and useful applications that focus on human experiences. I like using technology purposefully, not just for technology's sake.
        </p>
      </div>
      <div style={{ width: `70%`, height: `1px`, backgroundColor: `${lime}`, margin: `0 auto` }}></div>
      <div style={{ maxWidth: `50%`, margin: `0 auto`, padding: `3rem 0`, color: `${offWhite}` }}>
        <h2>Professional</h2>
        <p>
        Throughout my six years working in the field, I've had the opportunity to create custom software in the startup, commercial and government domains. I value trust, quality communication, and a collaborative and supportive work environment. I believe in people over process and
        enjoy working closely with clients to best understand their needs. Even more, I enjoy working closely with co-workers to deliver quality, tested software solutions specifically tailored for the needs of the client. I've worked with talented collaborators to successfully
        deliver projects spanning a number of industries including insurance, finance, logistics, and communications
        </p>
        <p>
          Head to my <Link to="/resume" style={{ color: `${lime}` }}>resume</Link> for a more in-depth look at my professional experience.
        </p>
      </div>
      <div style={{ width: `70%`, height: `1px`, backgroundColor: `${lime}`, margin: `0 auto` }}></div>
      <div style={{ maxWidth: `50%`, margin: `0 auto`, padding: `3rem 0 6rem`, color: `${offWhite}` }}>
        <h2>Side</h2>
        <p>
           For me, side work is not just about doing a favor for a friend or pursuing a passion project. It’s about meeting people, making new connections and challenging myself. I care deeply about the collaborative nature of technology, which is why you'll often find me at meetups, conferences, and workshops around the country. I love an excuse to experiment with a technology I'm unfamiliar with as much as I enjoy sharing something I'm well-versed in.
        </p>
        <p>
          Check out my<Link to="/side" style={{ color: `${lime}` }}> on the side</Link> page for more on the outside of nine-to-five stuff.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
