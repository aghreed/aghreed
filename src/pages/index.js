import React from "react";
import { Link } from "gatsby";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { lime, navy, offWhite } from "../components/colors";

const h2Style = css`
  color: ${offWhite};
  margin-bottom: 0.5em;
  font-weight: 400;
  letter-spacing: 0px;
`;

const h4Style = css`
  letter-spacing: 0.15em;
  font-weight: 400;
  font-style: italic;
  text-align: center;
  margin: 1.5rem 0;
  font-family: "Source Sans", sans-serif;
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
  width: 45%;
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
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `resume`,
        `portfolio`,
        `aghreed`,
      ]}
    />
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
          I'm a software developer based in Queens, New York by way of Omaha,
          Nebraska and Manhattan, Kansas. I'm passionate about building
          intuitive and useful applications that focus on human experiences.
        </p>
        <h4 css={h4Style}>
          I like using technology purposefully, not just for technology's sake.
        </h4>
      </div>
      <div css={limeDividerStyle} />
      <div css={textBlockStyle}>
        <h2>Professional Work</h2>
        <p>
          Throughout my eight years working in the field, I've had the
          opportunity to create custom software in the startup, commercial and
          government domains. I value trust, quality communication, and a
          collaborative and supportive work environment. I enjoy working closely
          with clients to best understand their needs.
        </p>
        <h4 css={h4Style}> I believe in people over process. </h4>
        <p>
          Working closely with others is the only way to deliver well-tested,
          quality software tailored for the needs of the client.
        </p>
        <button css={buttonStyle}>
          <Link to="/resume/">View Resume</Link>
        </button>
      </div>
      <div css={limeDividerStyle} />
      <div css={textBlockStyle} style={{ paddingBottom: `7.5em` }}>
        <h2>Side Work</h2>
        <p>
          For me, side work is not just about doing a favor for a friend or
          pursuing a passion project. It’s about meeting people, making new
          connections and challenging myself.
        </p>
        <h4 css={h4Style}>
          {" "}
          I care deeply about the collaborative nature of technology.{" "}
        </h4>
        <p>
          Growth rarely happens in isolation — which is why, in pre-pandemic
          times, you could often find me at conferences, meetups, or workshops.
          I love an excuse to experiment with a technology I'm unfamiliar with
          as much as I enjoy sharing something I'm well-versed in.
        </p>
        <button css={buttonStyle}>
          <Link to="/side/">View Side Work</Link>
        </button>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
