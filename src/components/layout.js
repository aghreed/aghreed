import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import { navy, offWhite, lime } from "./colors";
import "./layout.css"

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
          <footer style={{ background: `${navy}`, width: `100%`, fontSize: `10px`, textAlign: `right`, color: `${offWhite}`, paddingRight: `1em`, paddingBottom: `1em` }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org" style={{ color: `${lime}`}}>Gatsby</a>
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
