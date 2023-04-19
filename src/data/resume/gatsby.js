import * as React from "react";
import { colors } from "../../components/colors";

const gatsbyResume = {
  companyName: "Gatsby Inc",
  companyWebsite: "https://gatsbyjs.com",
  positionTitle: "Senior Engineer / Concierge Engineer",
  dateRange: "Sept 2021 - Jan 2023",
  location: "New York, NY (Remote)",
  backgroundColor: colors.background,
  fontColor: colors.text,
  roles: [
    {
      roleResponsibilities: [
        "Deliver changes to gatsbyjs.com and Gatsby Cloud to support marketing initiatives",
        "Monitor and action off of feedback on the Gatsby framework documentation",
        "Maintain and modernize the Gatsby Cloud dashboard application — specifically the onboarding and create site workflows",
        <>
          Curate and moderate community submissions to the Gatsby{" "}
          <a
            href="https://www.gatsbyjs.com/starters/"
            target="_blank"
            rel="noopener noreferrer"
          >
            starter library
          </a>
        </>,
        <>
          Create the{" "}
          <a
            href="https://www.gatsbyjs.com/starters/gatsby-cms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            homepage starters
          </a>{" "}
          — a suite of a dozen official Gatsby starters that showcase building a
          homepage backed by various CMSs
        </>,
        <>
          Present at{" "}
          <a
            href="https://www.youtube.com/watch?v=Feye9UHOIkg&list=PLCU2qJekvcN3mX3lJZJ_ICZuJNfXKrjk1&index=9"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyConf 2022{" "}
          </a>
          on customizing the homepage starters to your company needs
        </>,
        <>
          Craft a{" "}
          <a
            href="https://www.gatsbyjs.com/blog/build-a-homepage-suited-to-your-needs-with-official-gatsby-cms-starters/#gatsby-skip-here"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog post
          </a>{" "}
          providing background, technical specifics, and the benefits of
          approaches taken with the homepage starters
        </>,
        "Collaborate with CMS partners to bring better CMS feature support to Gatsby Cloud, including a Kontent.ai homepage starter",
        <>
          Lead development of the{" "}
          <a
            href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-provision/"
            target="_blank"
            rel="noopener noreferrer"
          >
            gatsby-provision convention
          </a>{" "}
          with two initial implementations for Contentful and Sanity
        </>,
        "Serve as a Concierge Engineer to a dozen Enterprise level clients",
        "Get hands-on with client code bases to provide personalized Gatsby framework best practices",
        "Deliver front-end performance audits to increase client-side performance",
        "Deliver build audits to decrease site build times",
        "Create custom migration plans and guide major updates of Gatsby versions",
        "Advise on best practices creating custom site templates to build for scale",
        "Provide and action on valuable customer feedback about Gatsby framework and Gatsby Cloud",
      ],
      technologiesUsed: [
        {
          techType: "CMS",
          tech: "Contentful, WordPress, DatoCMS, Sanity, Drupal, Kontent.ai",
        },
        {
          techType: "Client",
          tech: "Gatsby, Typescript, Jest, Cypress, LaunchDarkly, Segment",
        },
        {
          techType: "Server",
          tech: "Gatsby, Typescript, Express, Jest, Prisma",
        },
        {
          techType: "Database",
          tech: "MySQL, Postgres",
        },
        {
          techType: "Architectural Patterns",
          tech: "JAMstack, GraphQL, REST, OAuth, Monorepos (NX, Lerna, yarn workspaces), Microservices, Gatsby Themes",
        },
      ],
    },
  ],
};

export default gatsbyResume;
