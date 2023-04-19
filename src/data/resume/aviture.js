import { colors } from "../../components/colors";

const avitureResume = {
  companyName: "Aviture, Inc",
  companyWebsite: "http://www.aviture.us.com",
  positionTitle: "Software Engineer",
  dateRange: "February 2013 - January 2015",
  location: "Omaha, NE",
  backgroundColor: colors.text,
  fontColor: colors.background,
  roles: [
    {
      roleResponsibilities: [
        "Define, design, and develop custom software solutions for clients in-house",
        "Actively participate in team Agile/Scrum practices",
        "Present technical progress to project stakeholders",
        "Gain experience with emerging web standards and technologies",
        "Collaborate closely with clients, designers, quality assurers, and subject matter experts",
      ],
      technologiesUsed: [
        {
          techType: "Client",
          tech: "AngularJS, Backbone, JQuery, Bootstrap, Semantic-UI, PhoneGap, Ionic, SVG, Leaflet, Cesium, Grunt, Gulp, LESS, SASS, Mocha, Jasmine, Chai",
        },
        {
          techType: "Server",
          tech: "Java, Spring, Node, Express",
        },
        {
          techType: "Database",
          tech: "SQL, MongoDB",
        },
        {
          techType: "Architectural Patterns",
          tech: "SPA, REST",
        },
        {
          techType: "Infrastructure / DevOps",
          tech: "Git, SVN, npm, bower, Jenkins, JIRA, Pivotal Tracker, BitBucket, Basecamp",
        },
      ],
    },
  ],
};

export default avitureResume;
