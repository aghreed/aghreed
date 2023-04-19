import { colors } from "../../components/colors";

const objectPartnersResume = {
  companyName: "Object Partners, Inc",
  companyWebsite: "http://www.objectpartners.com",
  positionTitle: "Senior Consultant",
  dateRange: "Jan 2015 - Dec 2016",
  location: "Omaha, NE",
  backgroundColor: colors.neutral,
  fontColor: colors.text,
  roles: [
    {
      positionTitle: "West Corporation",
      roleResponsibilities: [
        "Augment the technical staff of West Corporation",
        "Advocate for and actively participant in team Agile/Scrum practices",
        "Collaborate closely with on-site and remote product owners, designers, business analysts, developers, and quality assurers",
        "Demonstrate sprint progress to stakeholders",
        "Lead front-end app design and development",
        "Contribute to REST API design and development",
        "Develop internal library of reusable UI components",
        "Maintain and support internal and external applications through multiple release cycles",
      ],
      technologiesUsed: [
        {
          techType: "Client",
          tech: "React, Redux, Webpack, Babel, Bootstrap, LESS, Karma + Jasmine + Sinon",
        },
        {
          techType: "Server",
          tech: "Node, Hapi, Apache",
        },
        {
          techType: "Architectural Patterns",
          tech: "SPA, REST, OAuth, Microservices, Microclients",
        },
        {
          techType: "Infrastructure / DevOps",
          tech: "Jenkins, npm, yarn, TeamCity, JIRA, BitBucket, GitLab",
        },
      ],
    },
    {
      positionTitle: "TD Ameritrade",
      roleResponsibilities: [
        "Augment the technical staff of TD Ameritrade",
        "Assimilate to and actively participate in team Agile/Scrum practices",
        "Present sprint progress to stakeholders",
        "Lead front-end design and development",
        "Contribute to REST API design",
        "Collaborate closely with on-site and remote product owners, designers, business analysts, developers, and quality assurers",
        "Deploy and support an internal application through multiple release cycles",
      ],
      technologiesUsed: [
        {
          techType: "Client",
          tech: "AngularJS, UI-Router, Bootstrap, Gulp, Mocha",
        },
        {
          techType: "Server",
          tech: "Node, Express, Hapi",
        },
        {
          techType: "Architectural Patterns",
          tech: "SPA, REST",
        },
        {
          techType: "Infrastructure / DevOps",
          tech: "Git, npm, TeamCity, JIRA, BitBucket",
        },
      ],
    },
  ],
};

export default objectPartnersResume;
