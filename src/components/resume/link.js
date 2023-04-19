import React from "react";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";
import { colors } from "../colors";

const linkStyle = css`
  color: ${colors.text};
  border-bottom: 1px solid ${colors.text};
  &:hover {
    color: ${colors.accentDark};
    border-bottom: 1px solid ${colors.accentDark};
  }
`;

export const ExternalLink = ({ text, uri, style }) => {
  return (
    <a
      css={linkStyle}
      style={style}
      href={uri}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
