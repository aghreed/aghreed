import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

export const Portrait = () => {
  const data = useStaticQuery(graphql`
    query PortraitImages {
      center: file(relativePath: { eq: "center.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 325
            transformOptions: { grayscale: true }
          )
        }
      }
      right1: file(relativePath: { eq: "right-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 325
            transformOptions: { grayscale: true }
          )
        }
      }
      right2: file(relativePath: { eq: "right-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 325
            transformOptions: { grayscale: true }
          )
        }
      }
      right3: file(relativePath: { eq: "right-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 325
            transformOptions: { grayscale: true }
          )
        }
      }
      right4: file(relativePath: { eq: "right-4.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 325
            transformOptions: { grayscale: true }
          )
        }
      }
      left1: file(relativePath: { eq: "left-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 325
            transformOptions: { grayscale: true }
          )
        }
      }
      left2: file(relativePath: { eq: "left-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 325
            transformOptions: { grayscale: true }
          )
        }
      }
      left3: file(relativePath: { eq: "left-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 325
            transformOptions: { grayscale: true }
          )
        }
      }
      left4: file(relativePath: { eq: "left-4.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 325
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  `);

  const [imageToDisplay, setImageToDisplay] = React.useState(5);

  const mouseMoveHandler = (e) => {
    const windowWidth = window.innerWidth;
    const swimlaneWidth = Math.round(windowWidth / 9);
    const visibleImageIndex = Math.round(
      (e.clientX - Math.round(swimlaneWidth / 2)) / swimlaneWidth
    );
    setImageToDisplay(visibleImageIndex + 1);
  };

  React.useEffect(() => {
    if (!window || window.innerWidth <= 1080) {
      return;
    }
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  const portraitImageMap = React.useMemo(() => {
    return {
      0: data.left4,
      1: data.left4,
      2: data.left3,
      3: data.left2,
      4: data.left1,
      5: data.center,
      6: data.right1,
      7: data.right2,
      8: data.right3,
      9: data.right4,
      10: data.right4,
    };
  }, [data]);

  return (
    <>
      {Object.values(portraitImageMap).map((image, index) => {
        return (
          <GatsbyImage
            key={index}
            style={{
              position: "absolute",
              visibility: imageToDisplay === index ? "visible" : "hidden",
            }}
            image={getImage(image)}
            alt="aghreed-portrait"
          />
        );
      })}
    </>
  );
};
