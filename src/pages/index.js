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

const h4Style = css`
  letter-spacing: 0.15em;
  font-weight: 400;
  font-style: italic;
  text-align: center;
  margin: 1.5rem 0;
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
  p {
    text-align: justify;
  }
`;

const buttonStyle = css`
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: ${navy};
  border: 1px solid ${lime};
  cursor: pointer;

  a {
    color: ${offWhite};
    font-weight: 400;
    &:hover {
      text-decoration: none;
    }
  }

  &:hover {
    background: ${lime};

    a {
      color: ${navy};
    }
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
        <h2>Professional Work</h2>
        <p>
          Throughout my six years working in the field, I've had the opportunity to create custom software in the startup, commercial and government domains.
          I value trust, quality communication, and a collaborative and supportive work environment.
          I enjoy working closely with clients to best understand their needs.
        </p>
        <h4 css={h4Style}> I believe in people over process. </h4>
        <p>
          I enjoy working together with co-workers to deliver quality, tested software solutions specifically tailored for the needs of the client.
        </p>
        <button css={buttonStyle}><Link to="/resume/">View Resume</Link></button>
      </div>
      <div css={limeDividerStyle} />
      <div css={textBlockStyle}>
        <h2>Side Work</h2>
        <p>
           For me, side work is not just about doing a favor for a friend or pursuing a passion project. It’s about meeting people, making new connections and challenging myself.
        </p>
        <h4 css={h4Style}> I care deeply about the collaborative nature of technology. </h4>
        <p>
           Growth rarely happens in isolation — which is why you'll often find me at conferences, meetups, and workshops around the country. I love an excuse to experiment with a technology I'm unfamiliar with as much as I enjoy sharing something I'm well-versed in.
        </p>
        <button css={buttonStyle}><Link to="/side/">View Outside 9-to-5</Link></button>
      </div>
      <div css={limeDividerStyle} />
      <div css={textBlockStyle} style={{ paddingBottom: `7.5rem` }}>
        <h2>Contact</h2>
        <p>
          I am currently exploring remote or NYC-based opportunities for employment.
          If you're hiring — or even just looking for a collaborator — let me know a little more about the job and we'll get the conversation rolling.
        </p>
        <h4 css={h4Style}>Want to work with me?</h4>
        <button css={buttonStyle}><Link to="/contact/">Reach Out</Link></button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
