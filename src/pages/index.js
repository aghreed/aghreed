import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";
import Layout from "../components/layout";
import Seo from "../components/seo";
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

const dividerStyle = css`
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
  width: 42%;
  margin: 0 auto;
  padding: 3rem 0;
  color: ${offWhite};
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

const IndexPage = ({ data }) => {
  const [imageToDisplay, setImageToDisplay] = React.useState(4);
  const mouseMoveHandler = (e) => {
    const windowWidth = window.innerWidth;
    // divide width by number of images in play to create "swimlaneWidth"
    const swimlaneWidth = Math.round(windowWidth / 9);
    const visibleImageIndex = Math.round(
      (e.clientX - Math.round(swimlaneWidth / 2)) / swimlaneWidth
    );
    console.log("image to display: ", visibleImageIndex + 1);
    setImageToDisplay(visibleImageIndex + 1);
  };
  React.useEffect(() => {
    if (!window) {
      return null;
    }
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);
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
        <GatsbyImage
          style={{
            position: "absolute",
            visibility: imageToDisplay <= 1 ? "visible" : "hidden",
          }}
          image={getImage(data.left4)}
          alt="left-4"
        />
        <GatsbyImage
          style={{
            position: "absolute",
            visibility: imageToDisplay === 2 ? "visible" : "hidden",
          }}
          image={getImage(data.left3)}
          alt="left-3"
        />
        <GatsbyImage
          style={{
            position: "absolute",
            visibility: imageToDisplay === 3 ? "visible" : "hidden",
          }}
          image={getImage(data.left2)}
          alt="left-2"
        />
        <GatsbyImage
          style={{
            position: "absolute",
            visibility: imageToDisplay === 4 ? "visible" : "hidden",
          }}
          image={getImage(data.left1)}
          alt="left-1"
        />
        <GatsbyImage
          style={{
            position: "absolute",
            visibility: imageToDisplay === 5 ? "visible" : "hidden",
          }}
          image={getImage(data.center)}
          alt="center"
        />
        <GatsbyImage
          style={{
            position: "absolute",
            visibility: imageToDisplay === 6 ? "visible" : "hidden",
          }}
          image={getImage(data.right1)}
          alt="right-1"
        />
        <GatsbyImage
          style={{
            position: "absolute",
            visibility: imageToDisplay === 7 ? "visible" : "hidden",
          }}
          image={getImage(data.right2)}
          alt="right-2"
        />
        <GatsbyImage
          style={{
            position: "absolute",
            visibility: imageToDisplay === 8 ? "visible" : "hidden",
          }}
          image={getImage(data.right3)}
          alt="right-3"
        />
        <GatsbyImage
          style={{
            position: "absolute",
            visibility: imageToDisplay >= 9 ? "visible" : "hidden",
          }}
          image={getImage(data.right4)}
          alt="right-4"
        />
      </div>
      <div
        style={{ background: `${navy}`, width: `100%`, textAlign: `center` }}
      >
        <div style={{ padding: `3rem 1rem` }}>
          <h2 css={h2Style}>Hey there!</h2>
          <h2 css={h2Style}>You can call me Alex.</h2>
          <h2 css={h2Style}>Or Reed.</h2>
          <h2 css={h2Style}>Most people just call me Reed.</h2>
        </div>
        <div css={dividerStyle} />
        <div css={textBlockStyle}>
          <p style={{ color: `${offWhite}` }}>
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
            involved in were powered by healthy communication and collaboration.
            Doesn't matter whether the team process is a flavor of scrum, a
            kanban board, or a bit more like a hackathon. I'm for a process that
            enables flow for everyone in their respective discipline.
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
      ]}
    />
  );
}

export const query = graphql`
  query IndexImage {
    center: file(relativePath: { eq: "center.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 325
          transformOptions: { grayscale: true }
        )
      }
    }
    right1: file(relativePath: { eq: "right-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 325
          transformOptions: { grayscale: true }
        )
      }
    }
    right2: file(relativePath: { eq: "right-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 325
          transformOptions: { grayscale: true }
        )
      }
    }
    right3: file(relativePath: { eq: "right-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 325
          transformOptions: { grayscale: true }
        )
      }
    }
    right4: file(relativePath: { eq: "right-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 325
          transformOptions: { grayscale: true }
        )
      }
    }
    left1: file(relativePath: { eq: "left-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 325
          transformOptions: { grayscale: true }
        )
      }
    }
    left2: file(relativePath: { eq: "left-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 325
          transformOptions: { grayscale: true }
        )
      }
    }
    left3: file(relativePath: { eq: "left-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 325
          transformOptions: { grayscale: true }
        )
      }
    }
    left4: file(relativePath: { eq: "left-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 325
          transformOptions: { grayscale: true }
        )
      }
    }
  }
`;
