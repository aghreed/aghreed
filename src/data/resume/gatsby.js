import React from "react";
import { colors } from "../../components/colors";
import { ExternalLink } from "../../components/resume/link";

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
      positionTitle: "Senior Engineer",
      roleResponsibilities: [
        "Deliver changes to gatsbyjs.com and Gatsby Cloud to support marketing initiatives",
        "Monitor and action off of feedback on the Gatsby framework documentation",
        "Maintain and modernize the Gatsby Cloud dashboard application — specifically the onboarding and create site workflows",
        <>
          Curate and moderate community submissions to the Gatsby{" "}
          <ExternalLink
            uri="https://www.gatsbyjs.com/starters/"
            text="starter library"
          />
        </>,
        <>
          Create the{" "}
          <ExternalLink
            uri="https://www.gatsbyjs.com/starters/gatsby-cms/"
            text="homepage starters"
          />{" "}
          — a suite of a dozen official Gatsby starters that showcase building a
          homepage backed by various CMSs
        </>,
        <>
          Present at{" "}
          <ExternalLink
            uri="https://www.youtube.com/watch?v=Feye9UHOIkg&list=PLCU2qJekvcN3mX3lJZJ_ICZuJNfXKrjk1&index=9"
            text="GatsbyConf 2022"
          />{" "}
          on customizing the homepage starters to your company needs
        </>,
        <>
          Craft a{" "}
          <ExternalLink
            uri="https://www.gatsbyjs.com/blog/build-a-homepage-suited-to-your-needs-with-official-gatsby-cms-starters/#gatsby-skip-here"
            text="blog post"
          />{" "}
          providing background, technical specifics, and the benefits of
          approaches taken with the homepage starters
        </>,
        "Collaborate with CMS partners to bring better CMS feature support to Gatsby Cloud, including a Kontent.ai homepage starter",
        <>
          Lead development of the{" "}
          <ExternalLink
            uri="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-provision/"
            text="gatsby-provision convention"
          />{" "}
          with two initial implementations for Contentful and Sanity
        </>,
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
        {
          techType: "Infrastructure / DevOps",
          tech: "Google Cloud, kubernetes, git, npm, GitHub, Shortcut",
        },
      ],
    },
    {
      positionTitle: "Concierge Engineer",
      roleResponsibilities: [
        <>
          Serve as a{" "}
          <ExternalLink
            uri="https://www.gatsbyjs.com/products/concierge/"
            text="Concierge Engineer"
          />{" "}
          to a dozen Enterprise level clients
        </>,
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
          tech: "Contentful, WordPress, Sanity, Drupal, Contentstack",
        },
        {
          techType: "Client",
          tech: "Gatsby, Typescript",
        },
        {
          techType: "Server",
          tech: "Gatsby, Typescript",
        },
        {
          techType: "Database",
          tech: "MySQL, Postgres",
        },
        {
          techType: "Architectural Patterns",
          tech: "JAMstack, GraphQL, Monorepos (NX, Lerna, yarn workspaces), Microservices, Gatsby Themes",
        },
        {
          techType: "Infrastructure / DevOps",
          tech: "Google Cloud, AWS, Bamboo, git, npm, artifactory, Zendesk",
        },
      ],
    },
  ],
};

export default gatsbyResume;
