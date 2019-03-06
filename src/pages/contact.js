import React from "react";
// eslint-disable-next-line
import { css, jsx } from "@emotion/core";
import Image4 from "../components/image4";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { navy, offWhite, lime } from "../components/colors";

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

const buttonStyle = css`
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: ${offWhite};
  border: 1px solid ${navy};
  cursor: pointer;

  a {
    color: ${offWhite};
    font-weight: 400;
    &:hover {
      text-decoration: none;
    }
  }

  &:hover {
    background: ${navy};

    a {
      color: ${offWhite};
    }
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
    {/* form for contacting me goes here... need to get backend email service running */}
    <div style={{ maxWidth: `1040px`, margin: `5rem auto` }}>
      <form method="post" action="http://localhost:8888/contact-email" style={{ width: `80%`, margin: `0 auto` }}>
        <div style={{ display: `flex`, width: `100%`, margin: `0 auto`, justifyContent: `space-evenly` }}>
          <div style={{ textAlign: `center` }}>
            <label style={{ marginRight: `1rem` }}>Your e-mail</label>
            <input type="text" name="from" />
          </div>
          <div style={{ textAlign: `center` }}>
            <label style={{ marginRight: `1rem` }}>Subject</label>
            <input type="text" name="subject" />
          </div>
        </div>
        <div style={{ display: `flex`, width: `100%`, margin: `2em auto`, textAlign: `center`, justifyContent: `center`, alignContent: `center` }}>
          <label style={{ marginRight: `1rem` }}>Message</label>
          <textarea name="body"></textarea>
        </div>
        <div style={{ margin: `0 auto`, width: `100%`, textAlign: `center` }}>
          <button type="submit" style={{ padding: `1rem 2rem` }}>Send</button>
        </div>
      </form>
    </div>
  </Layout>
);

export default Contact;
