import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const navy = `#1B3C59`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `2rem 0`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: `${navy}` }}>{siteTitle}</Link>
      </h1>
      <div style={{ width: `60%`, height: `1px`, backgroundColor: `${navy}`, margin: `1.75rem auto` }}></div>
      <div style={{ display: `flex`, width: `40%`, margin: `0 auto`, justifyContent: `space-evenly` }}>
        <h3><Link to="/" style={{ color: `${navy}`, fontVariant: `small-caps` }} activeStyle={{ textDecoration: `underline` }}>about</Link></h3>
        <h3><Link to="/side/" style={{ color: `${navy}`, fontVariant: `small-caps` }} activeStyle={{ textDecoration: `underline` }}>on the side</Link></h3>
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
