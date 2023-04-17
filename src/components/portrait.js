import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const Portrait = ({ imageToDisplay }) => {
  return (
    <GatsbyImage
      style={{
        position: "absolute",
        visibility: imageToDisplay <= 1 ? "visible" : "hidden",
      }}
      image={getImage(data.left4)}
      alt="left-4"
    />
  );
};
