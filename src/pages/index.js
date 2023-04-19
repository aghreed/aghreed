import React from "react";
import { Link } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { colors } from "../components/colors";
import { Portrait } from "../components/portrait";

const h2Style = css`
  color: ${colors.background};
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

const dividerStyle = css`
  width: 60%;
  height: 1px;
  background: ${colors.accent};
  margin: 0 auto;
  transition: width 500ms linear;
  @media (max-width: 550px) {
    width: 80%;
  }
`;

const textBlockStyle = css`
  width: 42%;
  margin: 0 auto;
  padding: 3rem 0;
  color: ${colors.background};
  @media (max-width: 550px) {
    width: 65%;
  }
  p {
    margin-bottom: 0;
    text-align: justify;
  }
`;

const buttonStyle = css`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: ${colors.text};
  border: 1px solid ${colors.accent};
  cursor: pointer;

  a {
    color: ${colors.background};
    font-weight: 400;
    &:hover {
      text-decoration: none;
    }
  }

  &:hover {
    background: ${colors.accent};

    a {
      color: ${colors.text};
    }
  }
`;

const IndexPage = () => {
  const yearsInTheIndustry = new Date(Date.now()).getUTCFullYear() - 2013;

  return (
    <Layout>
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          width: `100%`,
          margin: `0 auto 4.9rem`,
          height: `325px`,
        }}
      >
        <Portrait />
      </div>
      <div
        style={{
          background: `${colors.text}`,
          width: `100%`,
          textAlign: `center`,
        }}
      >
        <div style={{ padding: `3rem 1rem` }}>
          <h2 css={h2Style}>Hey there!</h2>
          <h2 css={h2Style}>You can call me Alex.</h2>
          <h2 css={h2Style}>Or Reed.</h2>
          <h2 css={h2Style}>Most people just call me Reed.</h2>
        </div>
        <div css={dividerStyle} />
        <div css={textBlockStyle}>
          <p style={{ color: `${colors.background}` }}>
            I'm a software engineer based in Queens, New York who can do a
            little bit of everything, but is passionate about UI. I like to
            build websites and applications that focus on human experiences.
          </p>
        </div>
        <div css={dividerStyle} />
        <div css={textBlockStyle}>
          <h2>Professional Work</h2>
          <p>
            In my {yearsInTheIndustry} years working in the field, I've had the
            opportunity to create custom software in the startup, commercial and
            government domains. I value trust, quality communication, and a
            collaborative and supportive work environment.
          </p>
          <h4 css={h4Style}>
            I'm a believer in people over process. But I like process too.
          </h4>
          <p>
            The most successful (and let's be real, fun) projects I have been
            involved in were built on healthy communication and collaboration.
            Whether the team process is a flavor of scrum, a kanban board, or a
            bit more like a hackathon — I'm just for a process that enables flow
            for everyone in their respective disciplines.
          </p>
          <button css={buttonStyle}>
            <Link to="/resume/">View Resume</Link>
          </button>
        </div>
        <div css={dividerStyle} />
        <div css={textBlockStyle} style={{ paddingBottom: `7.5em` }}>
          <h2>Side Work</h2>
          <p>
            For me, side work is not just about doing a favor for a friend or
            pursuing a passion project. It's about making new connections,
            learning something new and challenging myself.
          </p>
          <h4 css={h4Style}>
            I care deeply about the collaborative nature of technology.
          </h4>
          <p>
            Growth rarely happens in isolation — which is why you can often find
            me at conferences, meetups, or workshops. I love an excuse to
            experiment with a technology I'm unfamiliar with as much as I enjoy
            sharing something I'm well-versed in.
          </p>
          <button css={buttonStyle}>
            <Link to="/side/">View Side Work</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export function Head() {
  return (
    <Seo
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `resume`,
        `portfolio`,
        `aghreed`,
        `Alex Reed`,
      ]}
    />
  );
}
