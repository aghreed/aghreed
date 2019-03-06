import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// eslint-disable-next-line
import { css, jsx } from "@emotion/core";

import Header from "./header"
import { navy, offWhite, lime } from "./colors";
import "./layout.css"

import GithubIcon from "../images/github_icon.svg";
import GithubIconHover from "../images/github_icon_hover.svg";

const footerStyle = css`
  display: flex;
  justify-content: space-between;
  background: ${navy};
  width: 100%;
  font-size: 10px;
  text-align: right;
  color: ${offWhite};
`;

const githubIconStyle = css`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-image: url(${GithubIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: background-image 300ms linear;
  margin: 2em 1em;

  &:hover {
    background-image: url(${GithubIconHover})
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            padding: `0`
          }}
        >
          <main>{children}</main>
          <footer css={footerStyle}>
            <div style={{ minWidth: `115px` }}></div>
            <div css={githubIconStyle} onClick={() => window.open("https://github.com/aghreed", "_blank")} />
            <div style={{ minWidth: `115px`, alignSelf: `flex-end` }}>
              <div style={{ padding: `0 1em 1em 0` }}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org" style={{ color: `${lime}`}}>Gatsby</a>
              </div>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
