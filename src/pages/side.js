import React from "react";
import { graphql } from "gatsby";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { navy, offWhite, darkLime } from "../components/colors";

import WhitneyPortfolioGIF from "../images/whitneyportfolio.gif";
import ControllerAsSyntaxGIF from "../images/controller-as-syntax.gif";

const headerDividerStyle = css`
  width: 60%;
  height: 1px;
  background: ${navy};
  margin: 1.75rem auto;
  transition: width 500ms linear;
  @media (max-width: 850px) {
    width: 80%;
  }
`;

const sectionContainerStyle = css`
  display: flex;
  margin: 0 7rem;
  justify-content: space-around;
  @media (max-width: 960px) {
    flex-direction: column;
    margin: 0 2rem;
  }
`;

const goofySectionContainerStyle = css`
  display: flex;
  margin: 0 7rem;
  justify-content: space-around;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    margin: 0 2rem;
  }
`;

const rightSideTextStyle = css`
  width: 60%;
  text-align: left;
  justify-self: start;
  align-self: center;
  margin-left: 1rem;
  margin-right: 3rem;
  transition: width 500ms linear;
  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    justify-self: center;
    text-align: left;
  }
`;

const leftSideTextStyle = css`
  width: 60%;
  text-align: right;
  justify-self: end;
  align-self: center;
  margin-left: 3rem;
  margin-right: 1rem;
  transition: width 500ms linear;
  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: left;
    justify-self: center;
  }
`;

const leftSideImageStyle = css`
  justify-self: end;
  width: 100%;
  margin-right: 1rem;
  @media (max-width: 960px) {
    margin-right: 0;
  }
`;

const rightSideImageStyle = css`
  justify-self: start;
  width: 100%;
  margin-left: 1rem;
  @media (max-width: 960px) {
    margin-left: 0;
  }
`;

const Side = ({ data }) => {
  console.log("data: ", data);
  return (
    <Layout>
      <div style={{ maxWidth: `100%`, margin: `0 auto` }}>
        <GatsbyImage image={getImage(data.hero)} />
      </div>
      <h1
        style={{
          textAlign: `center`,
          marginTop: `3em`,
          color: `${navy}`,
          fontVariant: `small-caps`,
        }}
      >
        on the side
      </h1>
      <div css={headerDividerStyle}></div>
      {/* Yonder.Guide */}
      <section
        style={{
          padding: `4rem 0`,
          background: `${offWhite}`,
          color: `${navy}`,
        }}
      >
        <div css={goofySectionContainerStyle}>
          <div css={leftSideImageStyle}>
            <div
              style={{
                width: `100%`,
                height: `100%`,
                minHeight: `315px`,
                margin: `0 auto`,
              }}
            >
              <GatsbyImage image={getImage(data.yonder)} />
            </div>
          </div>
          <div css={rightSideTextStyle}>
            <h2>
              <a
                style={{ color: `${navy}` }}
                href="https://github.com/aghreed/yonder.guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yonder.Guide
              </a>
            </h2>
            <p>
              Yonder.Guide is for discovering, documenting, and sharing travel
              experiences.
            </p>
            <p>
              This is an ongoing passion project of mine, inspired by my own
              travels and those of close friends. It is intended to be an
              immersive long-form medium for spreading the joy of travel. While
              it’s not ready to help document travels around the world yet, a
              soft launch is coming this summer. For me, Yonder.Guide has been
              an opportunity to work with new tech like Apollo Client & Server,
              Auth0, CSS Grid, and React Hooks.
            </p>
          </div>
        </div>
      </section>
      {/* Whitney's site */}
      <section
        style={{
          padding: `5rem 0`,
          background: `${navy}`,
          color: `${offWhite}`,
        }}
      >
        <div css={sectionContainerStyle}>
          <div css={leftSideTextStyle}>
            <h2>
              <a
                href="http://www.whitneyjenich.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: `${offWhite}` }}
              >
                Whitney's Portfolio
              </a>
            </h2>
            <p>
              I was honored when good friend and college classmate, Whitney
              Jenich, asked me to develop her portfolio site in 2018.
            </p>
            <p>
              I love any opportunity to work with talented designers like
              Whitney, and this project served as a great introduction to some
              new technologies for me. This was my first time working with
              designs made with Sketch, and was my first Gatsby site. I've since
              come to appreciate both technologies enough to use them in
              producing my own portfolio.
            </p>
          </div>
          <div css={rightSideImageStyle}>
            <a
              href="http://www.whitneyjenich.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="moving image of Whitney's site"
            >
              <div
                style={{
                  cursor: `pointer`,
                  width: `100%`,
                  height: `100%`,
                  minHeight: `315px`,
                  margin: `0 auto`,
                  backgroundImage: `url(${WhitneyPortfolioGIF})`,
                  backgroundSize: `contain`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`,
                }}
              />
            </a>
          </div>
        </div>
      </section>
      {/* TBG site */}
      <section
        style={{
          padding: `5rem 0`,
          background: `${offWhite}`,
          color: `${navy}`,
        }}
      >
        <div css={goofySectionContainerStyle}>
          <div css={leftSideImageStyle}>
            <a
              href="http://www.tbgco.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: `pointer`,
                width: `100%`,
                height: `100%`,
                minHeight: `315px`,
                margin: `0 auto`,
              }}
            >
              <GatsbyImage image={getImage(data.tbg)} />
            </a>
          </div>
          <div css={rightSideTextStyle}>
            <h2>
              <a
                href="http://www.tbgco.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: `${navy}` }}
              >
                The Benefit Group
              </a>
            </h2>
            <p>
              The Benefit Group (TBG) is an Omaha-based company that provides
              employee benefit packages for self-funded employers.
            </p>
            <p>
              In 2016, I collaborated with then designer/photographer, now film
              maker{" "}
              <a
                href="http://www.bridgetmcquillan.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: `underline`, color: `${navy}` }}
              >
                {" "}
                Bridget McQuillan{" "}
              </a>{" "}
              to create a custom-themed WordPress site for the company. We
              worked closely with the marketing team at TBG to overhaul their
              website by providing photography, design, copy, and an updated
              website that they could access and edit themselves through an
              easy-to-use CMS.
            </p>
          </div>
        </div>
      </section>
      {/* Angular controllerAs syntax talk */}
      <section
        style={{
          padding: `5rem 0`,
          background: `${darkLime}`,
          color: `${navy}`,
        }}
      >
        <div css={sectionContainerStyle}>
          <div css={leftSideTextStyle}>
            <h2>Talks</h2>
            <p>
              I’ve given talks at multiple meetups and events, including Omaha
              Mobile Meetup, BarCamp Omaha, and ng-nebraska, a meetup for
              AngularJS developers.
            </p>
            <p>
              Thanks to the good folks at{" "}
              <a
                style={{ color: `${navy}`, textDecoration: `underline` }}
                href="http://techomaha.com/2015/11/alex-reed-controller-as/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TechOmaha
              </a>
              , you can watch my 2015 talk for ng-nebraska about "controllerAs"
              syntax, why you should be using it, and something about soup and
              stew. The source code of the presentation is also available on{" "}
              <a
                style={{ color: `${navy}`, textDecoration: `underline` }}
                href="https://github.com/aghreed/controllerAs-syntax-slides"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              .
            </p>
          </div>
          <div css={rightSideImageStyle}>
            <a
              href="https://youtu.be/QOiqPLL2Tec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="controller-as syntax demonstration"
            >
              <div
                style={{
                  cursor: `pointer`,
                  width: `100%`,
                  height: `100%`,
                  minHeight: `315px`,
                  margin: `0 auto`,
                  backgroundImage: `url(${ControllerAsSyntaxGIF})`,
                  backgroundSize: `contain`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`,
                }}
              />
            </a>
          </div>
        </div>
      </section>
      {/* Conferences attended - React Norway - React Rally - MidwestJS - NEJS Conf */}
      {/* Meetups - ngNebraska - NEJS - Mobile Meetup - NodeSchool */}
      <section
        style={{
          padding: `5rem 0`,
          background: `${navy}`,
          color: `${offWhite}`,
        }}
      >
        <div css={sectionContainerStyle}>
          <div style={{ justifySelf: `center`, margin: `3rem` }}>
            <h2 style={{ textAlign: `center` }}>Recent Conferences</h2>
            <ul>
              <li>
                <a
                  style={{ color: `${offWhite} ` }}
                  href="https://reactnorway.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Norway 2022 - Larvik, Norway
                </a>
              </li>
              <li>
                <a
                  style={{ color: `${offWhite} ` }}
                  href="http://midwestjs.com/#/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MidwestJS 2018 - Minneapolis, MN
                </a>
              </li>
              <li>
                <a
                  style={{ color: `${offWhite}` }}
                  href="https://www.reactrally.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Rally 2018 - Salt Lake, UT
                </a>
              </li>
              <li>
                <a
                  style={{ color: `${offWhite}` }}
                  href="https://2018.nejsconf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NEJS Conf 2018 - Omaha, NE
                </a>
              </li>
            </ul>
          </div>
          <div style={{ justifySelf: `center`, margin: `3rem` }}>
            <h2 style={{ textAlign: `center` }}>Meetups and Workshops</h2>
            <ul>
              <li>
                <a
                  style={{ color: `${offWhite} ` }}
                  href="https://nebraskajs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nebraska JS
                </a>
              </li>
              <li>
                <a
                  style={{ color: `${offWhite}` }}
                  href="https://twitter.com/ngnebraska"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ng-nebraska
                </a>
              </li>
              <li>
                <a
                  style={{ color: `${offWhite}` }}
                  href="https://www.meetup.com/LearnSwiftOmaha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Swift Omaha (formerly Omaha Mobile Group)
                </a>
              </li>
              <li>
                <a
                  style={{ color: `${offWhite}` }}
                  href="https://www.nodeschool.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Node School
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Side;

export function Head() {
  return <Seo title="Side" />;
}

export const query = graphql`
  query SideImage {
    hero: file(relativePath: { eq: "reed-portrait-7.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    yonder: file(relativePath: { eq: "yonderguide.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    tbg: file(relativePath: { eq: "tbg.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
