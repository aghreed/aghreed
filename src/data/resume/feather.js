import { colors } from "../../components/colors";

const featherResume = {
  companyName: "Feather",
  companyWebsite: "https://livefeather.com",
  positionTitle: "Senior Engineer",
  dateRange: "April 2019 - Aug 2021",
  location: "New York, NY",
  backgroundColor: colors.accentDark,
  fontColor: colors.text,
  roles: [
    {
      roleResponsibilities: [
        "Cultivate a collaborative, empathetic, and engaging engineering culture",
        "Advocate for and actively participate in team Agile/Scrum practices",
        "Serve as lead engineer of the team focused on supporting the e-commerce needs of the company",
        "Collaborate closely with fellow engineers, product managers, designers as well as quality and data analysts",
        "Lead front-end development and organize company best practices",
        "Design custom REST APIs and lead the development of data services",
        "Model schema changes and create and manage migrations to enact them",
        "Partner with product managers to provide technical perspective on road maps and stakeholder requests alike",
        "Brainstorm with designers to develop a design system of reusable UI components",
        "Support QA in testing smarter through automating tests and building confidence in tools",
        "Create strategy with the Data team to capture insightful analytics to enable data driven decisions",
        "Build trust and foster relationships directly with stakeholders",
        "Maintain and support multiple internal and external applications through multiple iterations and release cycles",
      ],
      technologiesUsed: [
        {
          techType: "CMS",
          tech: "Contentful",
        },
        {
          techType: "Client",
          tech: "Typescript, React, Redux, Webpack, Jest + Enzyme, Cypress, Segment, Contentful",
        },
        {
          techType: "Server",
          tech: "Typescript, Node, Express, TypeORM, NestJS",
        },
        {
          techType: "Database",
          tech: "MySQL, Postgres",
        },
        {
          techType: "Architectural Patterns",
          tech: "SPA, REST, OAuth, Monorepos, Microservices",
        },
        {
          techType: "Infrastructure / DevOps",
          tech: "Git, npm, Docker, CircleCI, AWS",
        },
      ],
    },
  ],
};

export default featherResume;
