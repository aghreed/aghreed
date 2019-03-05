import React from "react";
// eslint-disable-next-line
import { css, jsx } from "@emotion/core";
import Image4 from "../components/image4";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { navy } from "../components/colors";

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

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{ maxWidth: `100%`, margin: `0 auto` }}>
      <Image4 />
    </div>
    <h1 style={{ textAlign: `center`, marginTop: `3em`, fontVariant: `small-caps`, color: `${navy}` }}>contact</h1>
    <div css={headerDividerStyle} />

  </Layout>
);

export default Contact;
