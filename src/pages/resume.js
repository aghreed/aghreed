import React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { navy, offWhite, darkLime } from "../components/colors";

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

const companyHeaderContainerStyle = css`
  margin: 0rem 4rem 1rem;
  @media (max-width: 850px) {
    margin: 2.5rem 1.5rem 1rem;
  }
`;

const companyHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const companyNameAndTitleStyle = css`
  display: flex;
  align-items: baseline;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const companyTitleStyle = css`
  margin-left: 0.5rem;
  margin-bottom: 0.25rem;
  font-style: italic;
  @media (max-width: 850px) {
    margin-left: 0;
  }
`;

const companyDurationStyle = css`
  margin-right: 2rem;
  margin-bottom: 0.25rem;
  font-style: italic;
`;

const rolesTextStyle = css`
  margin: 1rem 6rem;
  @media (max-width: 850px) {
    margin: 1rem 1rem 1rem 2.5rem;
  }
`;

const techTextStyle = css`
  margin: 2rem 6rem;
  @media (max-width: 850px) {
    margin: 2rem 1rem 1rem 2.5rem;
  }
`;

const roleListStyle = css`
  margin: 0 8rem 0 3rem;
  @media (max-width: 850px) {
    margin: 0 3rem;
  }

  h4 {
    font-weight: 600;
  }
`;

const techListStyle = css`
  margin-right: 8rem;
  @media (max-width: 850px) {
    margin-right: 3rem;
  }

  h4 {
    font-weight: 600;
  }

  h5 {
    margin: 0.5rem 2rem;
    text-decoration: underline;
  }

  p {
    margin-left: 3rem;
  }
`;

const Resume = ({ data }) => (
  <Layout>
    <div style={{ maxWidth: `100%`, margin: `0 auto` }}>
      <GatsbyImage image={getImage(data.file)} />
    </div>
    <h1
      style={{
        textAlign: `center`,
        marginTop: `3em`,
        fontVariant: `small-caps`,
        color: `${navy}`,
      }}
    >
      resume
    </h1>
    <div css={headerDividerStyle} />
    {/* Gatsby */}
    <section
      style={{ padding: `4rem 0`, color: `${navy}`, background: `${offWhite}` }}
    >
      <div style={{ margin: `0 auto`, maxWidth: `1040px` }}>
        <div css={companyHeaderContainerStyle}>
          <div css={companyHeaderStyle}>
            <div css={companyNameAndTitleStyle}>
              <h2 style={{ marginBottom: `0.25rem` }}>
                <a
                  href="https://www.gatsbyjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: `${navy}` }}
                >
                  Gatsby Inc
                </a>
              </h2>
              <h4 css={companyTitleStyle}>Senior Engineer</h4>
            </div>
            <h4 css={companyDurationStyle}>Sept 2021 - Current</h4>
          </div>
          <h4>New York, NY (Remote)</h4>
        </div>
        <div css={rolesTextStyle}>
          <h4>Roles and Responsibilities</h4>
          <ul css={roleListStyle}>
            <li>
              Maintain (with many great peers) the gatsbyjs.com website, Gatsby
              OSS documentation, and Gatsby Cloud dashboard application
            </li>
            <li>
              Create and help moderate official and community Gatsby starters
              — most notably the "Homepage Starters"
            </li>
            <li>
              Collaborate with CMS partners to bring better CMS feature support
              to Gatsby Cloud
            </li>
            <li>
              Led the development of the <code>gatsby-provision</code>{" "}
              convention, and two initial implementations for Contentful and
              Sanity
            </li>
            <li>
              Fulfill Gatsby Concierge services, guiding and supporting numerous
              teams using Gatsby in the real world
            </li>
          </ul>
        </div>
        <div css={techTextStyle}>
          <h4>Technologies Used</h4>
          <div css={techListStyle}>
            <h5>CMS</h5>
            <p>Contentful, WordPress, DatoCMS, Sanity, Drupal, Kontent.ai</p>
            <h5>Client</h5>
            <p>Gatsby, Typescript, Jest, Cypress, LaunchDarkly, Segment</p>
            <h5>Server</h5>
            <p>Gatsby, Typescript, Express, Jest, Prisma</p>
            <h5>Database</h5>
            <p>MySQL, Postgres</p>
            <h5>Architectural Patterns</h5>
            <p>
              JAMstack, GraphQL, REST, OAuth, Monorepos (NX, Lerna),
              Microservices, Gatsby Themes
            </p>
            <h5>Infrastructure / DevOps</h5>
            <p>Git, npm / yarn, Docker, Aiven, CircleCI, Google Cloud</p>
          </div>
        </div>
      </div>
    </section>
    {/* Feather */}
    <section
      style={{ padding: `4rem 0`, color: `${navy}`, background: `${darkLime}` }}
    >
      <div style={{ margin: `0 auto`, maxWidth: `1040px` }}>
        <div css={companyHeaderContainerStyle}>
          <div css={companyHeaderStyle}>
            <div css={companyNameAndTitleStyle}>
              <h2 style={{ marginBottom: `0.25rem` }}>
                <a
                  href="https://www.livefeather.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: `${navy}` }}
                >
                  Feather
                </a>
              </h2>
              <h4 css={companyTitleStyle}>Senior Engineer</h4>
            </div>
            <h4 css={companyDurationStyle}>April 2019 - August 2021</h4>
          </div>
          <h4>New York, NY</h4>
        </div>
        <div css={rolesTextStyle}>
          <h4>Roles and Responsibilities</h4>
          <ul css={roleListStyle}>
            <li>
              Cultivate a collaborative, empathetic, and engaging engineering
              culture
            </li>
            <li>
              Advocate for and actively participate in team Agile/Scrum
              practices
            </li>
            <li>
              Serve as lead engineer of the team focused on supporting the
              e-commerce needs of the company
            </li>
            <li>
              Collaborate closely with fellow engineers, product managers,
              designers as well as quality and data analysts
            </li>
            <li>
              Lead front-end development and organize company best practices
            </li>
            <li>
              Design custom REST APIs and lead the development of data services
            </li>
            <li>
              Model schema changes and create and manage migrations to enact
              them
            </li>
            <li>
              Partner with product managers to provide technical perspective on
              roadmaps and stakeholder requests alike
            </li>
            <li>
              Brainstorm with designers to develop a design system of resuable
              UI components
            </li>
            <li>
              Support QA in testing smarter through automating tests and
              building confidence in tools
            </li>
            <li>
              Create strategy with the Data team to capture insightful analytics
              to enable data driven decisions
            </li>
            <li>
              Build trust and foster relationships directly with stakeholders
            </li>
            <li>
              Maintain and support multiple internal and external applications
              through multiple iterations and release cycles
            </li>
          </ul>
        </div>
        <div css={techTextStyle}>
          <h4>Technologies Used</h4>
          <div css={techListStyle}>
            <h5>Client</h5>
            <p>
              Typescript, React, Redux, Webpack, Jest + Enzyme, Cypress,
              Segment, Contentful
            </p>
            <h5>Server</h5>
            <p>Typescript, Node, Express, TypeORM, NestJS</p>
            <h5>Database</h5>
            <p>MySQL, Postgres</p>
            <h5>Architectural Patterns</h5>
            <p>SPA, REST, OAuth, Monorepos, Microservices</p>
            <h5>Infrastructure / DevOps</h5>
            <p>Git, npm, Docker, CircleCI, AWS</p>
          </div>
        </div>
      </div>
    </section>
    {/* Flyover Technical */}
    <section
      style={{ padding: `4rem 0`, color: `${offWhite}`, background: `${navy}` }}
    >
      <div style={{ margin: `0 auto`, maxWidth: `1040px` }}>
        <div css={companyHeaderContainerStyle}>
          <div css={companyHeaderStyle}>
            <div css={companyNameAndTitleStyle}>
              <h2 style={{ marginBottom: `0.25rem` }}>
                <a
                  href="http://www.flyovertechnical.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: `${offWhite}` }}
                >
                  Flyover Technical
                </a>
              </h2>
              <h4 css={companyTitleStyle}>Senior Consultant</h4>
            </div>
            <h4 css={companyDurationStyle}>April 2017 - December 2018</h4>
          </div>
          <h4>Omaha, NE</h4>
        </div>
        <div css={rolesTextStyle}>
          <h4>Roles and Responsibilities</h4>
          <ul css={roleListStyle}>
            <li>
              Augment the technical staff of the Retirement Plans Division at
              Mutual of Omaha
            </li>
            <li>
              Advocate for and actively participant in team Agile/Scrum
              practices
            </li>
            <li>
              Collaborate closely with product owners, architects, designers,
              and business analysts
            </li>
            <li>Lead front-end app design and development</li>
            <li>Contribute to back-end design and development</li>
            <li>Develop internal library of resuable UI components</li>
            <li>
              Maintain and support internal and external applications through
              multiple release cycles
            </li>
          </ul>
        </div>
        <div css={techTextStyle}>
          <h4>Technologies Used</h4>
          <div css={techListStyle}>
            <h5>Client</h5>
            <p>
              Typescript, React, Redux, Webpack, Babel, Lerna, Rollup,
              Semantic-UI, SASS, Jest + Enzyme, NightmareJS
            </p>
            <h5>Server</h5>
            <p>Groovy, Spring Boot, Zuul, Node, Hapi</p>
            <h5>Database</h5>
            <p>SQL/SQLite, MongoDB</p>
            <h5>Architectural Patterns</h5>
            <p>SPA, REST, OAuth, Monorepos, Microservices, Microclients</p>
            <h5>Infrastructure / DevOps</h5>
            <p>Git, npm, yarn, Artifactory, Docker, Jenkins, JIRA, BitBucket</p>
          </div>
        </div>
      </div>
    </section>
    {/* Object Partners, Inc */}
    <section
      style={{ padding: `4rem 0`, color: `${navy}`, background: `${offWhite}` }}
    >
      <div style={{ margin: `0 auto`, maxWidth: `1040px` }}>
        <div css={companyHeaderContainerStyle}>
          <div css={companyHeaderStyle}>
            <div css={companyNameAndTitleStyle}>
              <h2 style={{ marginBottom: `0.25rem` }}>
                <a
                  href="http://www.objectpartners.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: `${navy}` }}
                >
                  Object Partners, Inc
                </a>
              </h2>
              <h4 css={companyTitleStyle}>Senior Consultant</h4>
            </div>
            <h4 css={companyDurationStyle}>January 2015 - December 2016</h4>
          </div>
          <h4>Omaha, NE</h4>
        </div>
        <div css={rolesTextStyle}>
          <h3>West Corporation</h3>
          <h4 style={{ marginLeft: `1.5rem` }}>Roles and Responsibilities</h4>
          <ul css={roleListStyle}>
            <li>Augment the technical staff of West Corporation</li>
            <li>
              Advocate for and actively participant in team Agile/Scrum
              practices
            </li>
            <li>
              Collaborate closely with on-site and remote product owners,
              designers, business analysts, developers, and quality assurers
            </li>
            <li>Demonstrate sprint progress to stakeholders</li>
            <li>Lead front-end app design and development</li>
            <li>Develop internal library of resuable UI components</li>
            <li>Contribute to REST API design and development</li>
            <li>
              Deploy and support internal applications through multiple release
              cycles
            </li>
          </ul>
          <h4 style={{ marginLeft: `1.5rem`, marginTop: `2rem` }}>
            Technologies Used
          </h4>
          <div css={techListStyle}>
            <h5>Client</h5>
            <p>
              React, Redux, Webpack, Babel, Bootstrap, LESS, Karma + Jasmine +
              Sinon
            </p>
            <h5>Server</h5>
            <p>Node, Hapi, Apache</p>
            <h5>Architectural Patterns</h5>
            <p>SPA, REST, OAuth, Microservices, Microclients</p>
            <h5>Infrastructure / DevOps</h5>
            <p>Jenkins, npm, yarn, TeamCity, JIRA, BitBucket, GitLab</p>
          </div>
          <h3>TD Ameritrade</h3>
          <h4 style={{ marginLeft: `1.5rem` }}>Roles and Responsibilities</h4>
          <ul css={roleListStyle}>
            <li>Augment the technical staff of TD Ameritrade</li>
            <li>
              Assimilate to and actively participate in team Agile/Scrum
              practices
            </li>
            <li>Present sprint progress to stakeholders</li>
            <li>Lead front-end design and development</li>
            <li>Contribute to REST API design</li>
            <li>
              Collaborate closely with on-site and remote product owners,
              designers, business analysts, developers, and quality assurers
            </li>
            <li>
              Deploy and support an internal application through multiple
              release cycles
            </li>
          </ul>
          <h4 style={{ marginLeft: `1.5rem`, marginTop: `2rem` }}>
            Technologies Used
          </h4>
          <div css={techListStyle}>
            <h5>Client</h5>
            <p>AngularJS, UI-Router, Bootstrap, Gulp, Mocha</p>
            <h5>Server</h5>
            <p>Node, Express, Hapi</p>
            <h5>Architectural Patterns</h5>
            <p>SPA, REST</p>
            <h5>Infrastructure / DevOps</h5>
            <p>Git, npm, TeamCity, JIRA, BitBucket</p>
          </div>
        </div>
      </div>
    </section>
    {/* Aviture, Inc */}
    <section
      style={{
        padding: `4rem 0 8rem`,
        color: `${navy}`,
        background: `${darkLime}`,
      }}
    >
      <div style={{ margin: `0 auto`, maxWidth: `1040px` }}>
        <div css={companyHeaderContainerStyle}>
          <div css={companyHeaderStyle}>
            <div css={companyNameAndTitleStyle}>
              <h2 style={{ marginBottom: `0.25rem` }}>
                <a
                  href="http://www.aviture.us.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: `${navy}` }}
                >
                  Aviture, Inc
                </a>
              </h2>
              <h4 css={companyTitleStyle}>Software Developer</h4>
            </div>
            <h4 css={companyDurationStyle}>February 2013 - January 2015</h4>
          </div>
          <h4>Omaha, NE</h4>
        </div>
        <div css={rolesTextStyle}>
          <h4>Roles and Responsibilities</h4>
          <ul css={roleListStyle}>
            <li>
              Define, design, and develop custom software solutions for clients
              in-house
            </li>
            <li>Actively particpate in team Agile/Scrum practices</li>
            <li>Present technical progress to project stakeholders</li>
            <li>
              Gain experience with emerging web standards and technologies
            </li>
            <li>
              Collaborate closely with clients, designers, quality assurers, and
              subject matter experts
            </li>
          </ul>
        </div>
        <div css={techTextStyle}>
          <h4>Technologies Used</h4>
          <div css={techListStyle}>
            <h5>Client</h5>
            <p>
              AngularJS, Backbone, JQuery, Bootstrap, Semantic-UI, PhoneGap,
              Ionic, SVG, Leaflet, Cesium, Grunt, Gulp, LESS, SASS, Mocha,
              Jasmine, Chai
            </p>
            <h5>Server</h5>
            <p>Java, Spring, Node, Express</p>
            <h5>Database</h5>
            <p>SQL, MongoDB</p>
            <h5>Architectural Patterns</h5>
            <p>SPA, REST</p>
            <h5>Infrastructure / DevOps</h5>
            <p>
              Git, SVN, npm, bower, Jenkins, JIRA, Pivotal Tracker, BitBucket,
              Basecamp
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Resume;

export function Head() {
  return <Seo title="Resume" />;
}

export const query = graphql`
  query ResumeImage {
    file(relativePath: { eq: "reed-portrait-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
