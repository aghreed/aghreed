import { colors } from "../../components/colors";

const flyoverTechnicalResume = {
  companyName: "Flyover Technical",
  companyWebsite: "https://www.flyovertechnical.com",
  positionTitle: "Senior Consultant",
  dateRange: "Apr 2017 - Dec 2018",
  location: "Omaha, NE",
  backgroundColor: colors.text,
  fontColor: colors.background,
  roles: [
    {
      roleResponsibilities: [
        "Augment the technical staff of the Retirement Plans Division at Mutual of Omaha",
        "Advocate for and actively participant in team Agile/Scrum practices",
        "Collaborate closely with product owners, architects, designers, and business analysts",
        "Lead front-end app design and development",
        "Contribute to back-end design and development",
        "Develop internal library of reusable UI components",
        "Maintain and support internal and external applications through multiple release cycles",
      ],
      technologiesUsed: [
        {
          techType: "Client",
          tech: "Typescript, React, Redux, Redux Saga, Webpack, Babel, Lerna, Rollup, Semantic-UI, SASS, Jest + Enzyme, NightmareJS",
        },
        {
          techType: "Server",
          tech: "Groovy, Spring Boot, Zuul, Node, Hapi",
        },
        {
          techType: "Database",
          tech: "SQL/SQLite, MongoDB",
        },
        {
          techType: "Architectural Patterns",
          tech: "SPA, REST, OAuth, Monorepos, Microservices, Microclients",
        },
        {
          techType: "Infrastructure / DevOps",
          tech: "Git, npm, yarn, Artifactory, Docker, Jenkins, JIRA, BitBucket",
        },
      ],
    },
  ],
};

export default flyoverTechnicalResume;
