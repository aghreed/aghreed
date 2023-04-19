import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";

import Header from "./header";
import { colors } from "./colors";
import "./layout.css";

import GithubIcon from "../images/github_icon.svg";
import GithubIconHover from "../images/github_icon_hover.svg";

const footerStyle = css`
  display: flex;
  justify-content: space-between;
  background: ${colors.text};
  width: 100%;
  font-size: 10px;
  text-align: right;
  color: ${colors.background};
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
  color: transparent;

  &:hover {
    background-image: url(${GithubIconHover});
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
        }}
      >
        <main>{children}</main>
        <footer css={footerStyle}>
          <div style={{ minWidth: `115px` }}></div>
          <a
            css={githubIconStyle}
            href="https://github.com/aghreed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to GitHub profile"
          >
            Github Link
          </a>
          <div style={{ minWidth: `115px`, alignSelf: `flex-end` }}>
            <div style={{ padding: `0 1em 1em 0` }}>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a
                href="https://www.gatsbyjs.com"
                style={{ color: `${colors.accent}` }}
              >
                Gatsby
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
