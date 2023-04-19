import React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { colors } from "../components/colors";
import { Company } from "../components/resume/company";
import netlifyResume from "../data/resume/netlify";
import gatsbyResume from "../data/resume/gatsby";
import featherResume from "../data/resume/feather";
import flyoverTechnicalResume from "../data/resume/flyoverTechnical";
import objectPartnersResume from "../data/resume/objectPartners";
import avitureResume from "../data/resume/aviture";

const headerDividerStyle = css`
  width: 60%;
  height: 1px;
  background: ${colors.text};
  margin: 1.75rem auto;
  transition: width 500ms linear;
  @media (max-width: 850px) {
    width: 80%;
  }
`;

const Resume = ({ data }) => (
  <Layout>
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <GatsbyImage image={getImage(data.file)} alt="aghreed-resume-hero" />
    </div>
    <h1
      style={{
        textAlign: `center`,
        marginTop: `3em`,
        fontVariant: `small-caps`,
        color: `${colors.text}`,
      }}
    >
      resume
    </h1>
    <div css={headerDividerStyle} />
    {/* Netlify */}
    <Company {...netlifyResume} />
    {/* Gatsby */}
    <Company {...gatsbyResume} />
    {/* Feather */}
    <Company {...featherResume} />
    {/* Flyover Technical */}
    <Company {...flyoverTechnicalResume} />
    {/* OPI */}
    <Company {...objectPartnersResume} />
    {/* Aviture */}
    <Company {...avitureResume} />
  </Layout>
);

export default Resume;

export function Head() {
  return <Seo title="Resume" />;
}

export const query = graphql`
  query ResumeImage {
    file(relativePath: { eq: "stained-glass.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, height: 500)
      }
    }
  }
`;
