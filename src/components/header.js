import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";
import { navy } from "./colors";

const Header = ({ siteTitle }) => (
  <nav
    css={css`
      margin: 2rem 0;
      text-align: center;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1
        css={css`
          margin: 0;
        `}
      >
        <Link
          to="/"
          css={css`
            color: ${navy};
            &:hover {
              text-decoration: none;
            }
          `}
          activeStyle={{ textDecoration: `none` }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        css={css`
          width: 60%;
          height: 1px;
          background-color: ${navy};
          margin: 1.75rem auto;
          transition: width 500ms linear;
          @media (max-width: 850px) {
            width: 75%;
          }
          @media (max-width: 550px) {
            width: 85%;
          }
        `}
      />
      <div
        css={css`
          width: 40%;
          margin: 0 auto;
          transition: width 500ms linear;
          @media (max-width: 850px) {
            width: 60%;
          }
          @media (max-width: 550px) {
            width: 80%;
          }
        `}
      >
        <ul
          css={css`
            display: grid;
            list-style: none;
            margin: 0;
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem;

            li {
              font-size: 1.25rem;
              text-align: center;
            }

            a:hover {
              border-bottom: 1px solid ${navy};
            }
          `}
        >
          <li>
            <Link
              to="/resume/"
              style={{ color: `${navy}`, fontVariant: `small-caps` }}
              activeStyle={{ borderBottom: `2px solid ${navy}` }}
            >
              resume
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: `${navy}`, fontVariant: `small-caps` }}
              activeStyle={{ borderBottom: `2px solid ${navy}` }}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/side/"
              style={{
                color: `${navy}`,
                fontVariant: `small-caps`,
                wordSpacing: `-2px`,
              }}
              activeStyle={{
                borderBottom: `2px solid ${navy}`,
                wordSpacing: `-2px`,
              }}
            >
              side work
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
