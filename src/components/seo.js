import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

function Seo({ description, keywords, title }) {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || data.site.siteMetadata.description;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={data.site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
    </>
  );
}

Seo.defaultProps = {
  keywords: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Seo;
