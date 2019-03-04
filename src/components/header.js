import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// eslint-disable-next-line
import { css, jsx } from "@emotion/core";

const navy = `#1B3C59`;

const Header = ({ siteTitle }) => (
  <header
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
      <h1 css={css`
        margin: 0;
      `}>
        <Link to="/" style={{ color: `${navy}` }}>{siteTitle}</Link>
      </h1>
      <div css={css`
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
      `}/>
      <div css={css`
        display: flex;
        width: 40%;
        margin: 0 auto;
        justify-content: space-evenly;
        transition: width 500ms linear;
        @media (max-width: 850px) {
          width: 60%;
          justify-content: space-around;
        }
        @media (max-width: 550px) {
          width: 80%;
        }
      `}>
        <h3><Link to="/" style={{ color: `${navy}`, fontVariant: `small-caps` }} activeStyle={{ textDecoration: `underline` }}>about</Link></h3>
        <h3><Link to="/side/" style={{ color: `${navy}`, fontVariant: `small-caps`, wordSpacing: `-2px` }} activeStyle={{ textDecoration: `underline` }}>on the side</Link></h3>
        <h3><Link to="/resume/" style={{ color: `${navy}`, fontVariant: `small-caps` }} activeStyle={{ textDecoration: `underline` }}>resume</Link></h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
