import { colors } from "../../components/colors";

const netlifyResume = {
  companyName: "Netlify",
  companyWebsite: "https://netlify.com",
  positionTitle: "Concierge Engineer",
  dateRange: "Feb 2023 - Present",
  location: "New York, NY (Remote)",
  backgroundColor: colors.neutral,
  fontColor: colors.text,
  roles: [
    {
      roleResponsibilities: [
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
          tech: "Contentful, WordPress, Sanity, Drupal, Contentstack, Wagtail",
        },
        {
          techType: "Client",
          tech: "Gatsby, Typescript",
        },
        {
          techType: "Server",
          tech: "Gatsby, Typescript, Express",
        },
        {
          techType: "Architectural Patterns",
          tech: "JAMstack, GraphQL, REST, OAuth, Monorepos (NX, Lerna, yarn workspaces), Microservices, Gatsby Themes",
        },
      ],
    },
  ],
};

export default netlifyResume;
