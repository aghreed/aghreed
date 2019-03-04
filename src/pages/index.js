import React from "react"
import { Link } from "gatsby";
// eslint-disable-next-line
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { lime, navy, offWhite } from "../components/colors";

const h2Style = css`
  color: ${offWhite};
  margin-bottom: 0.5em;
  font-weight: 200;
  letter-spacing: 0px;
`;

const limeDividerStyle = css`
  width: 60%;
  height: 1px;
  background: ${lime};
  margin: 0 auto;
  transition: width 500ms linear;
  @media (max-width: 550px) {
    width: 80%;
  }
`;

const textBlockStyle = css`
  width: 50%;
  margin: 0 auto;
  padding: 3rem 0;
  color: ${offWhite};
  @media (max-width: 550px) {
    width: 70%;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `resume`, `portfolio`, `aghreed`]} />
    <div style={{ maxWidth: `100%`, margin: `0 auto` }}>
      <Image />
    </div>
    <div style={{ background: `${navy}`, width: `100%`, textAlign: `center` }}>
      <div style={{ padding: `3rem 1rem` }}>
        <h2 css={h2Style}>You can call me Alex.</h2>
        <h2 css={h2Style}>Or Reed.</h2>
        <h2 css={h2Style}>Most people just call me Reed.</h2>
      </div>
      <div css={limeDividerStyle} />
      <div css={textBlockStyle}>
        <p style={{ color: `${offWhite}` }}>
          I'm a software developer based in Brooklyn, New York by way of Omaha, Nebraska and Manhattan, Kansas. I'm passionate about building intuitive and useful applications that focus on human experiences. I like using technology purposefully, not just for technology's sake.
        </p>
      </div>
      <div css={limeDividerStyle} />
      <div css={textBlockStyle}>
        <h2>Professional</h2>
        <p>
        Throughout my six years working in the field, I've had the opportunity to create custom software in the startup, commercial and government domains. I value trust, quality communication, and a collaborative and supportive work environment. I believe in people over process and
        enjoy working closely with clients to best understand their needs. Even more, I enjoy working closely with co-workers to deliver quality, tested software solutions specifically tailored for the needs of the client. I've worked with talented collaborators to successfully
        deliver projects spanning a number of industries including insurance, finance, logistics, and communications
        </p>
        <p>
          Head to my <Link to="/resume/" style={{ color: `${lime}` }}>resume</Link> for a more in-depth look at my professional experience.
        </p>
      </div>
      <div css={limeDividerStyle} />
      <div css={textBlockStyle}>
        <h2>Side</h2>
        <p>
           For me, side work is not just about doing a favor for a friend or pursuing a passion project. It’s about meeting people, making new connections and challenging myself. I care deeply about the collaborative nature of technology, which is why you'll often find me at meetups, conferences, and workshops around the country. I love an excuse to experiment with a technology I'm unfamiliar with as much as I enjoy sharing something I'm well-versed in.
        </p>
        <p>
          Check out my<Link to="/side/" style={{ color: `${lime}` }}> on the side</Link> page for more on the outside of nine-to-five stuff.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
