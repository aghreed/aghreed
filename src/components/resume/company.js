import * as React from "react";
// eslint-disable-next-line
import { css, jsx } from "@emotion/react";

const companyHeaderContainerStyle = css`
  margin: 0rem 4rem 1rem;
  @media (max-width: 850px) {
    margin: 2.5rem 1.5rem 1rem;
  }
`;

const companyHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const companyNameAndTitleStyle = css`
  display: flex;
  align-items: baseline;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const companyTitleStyle = css`
  margin-left: 0.5rem;
  margin-bottom: 0.25rem;
  font-style: italic;
  @media (max-width: 850px) {
    margin-left: 0;
  }
`;

const companyDurationStyle = css`
  margin-right: 2rem;
  margin-bottom: 0.25rem;
  font-style: italic;
`;

const rolesTextStyle = css`
  margin: 1rem 6rem;
  @media (max-width: 850px) {
    margin: 1rem 1rem 1rem 2.5rem;
  }
`;

const techTextStyle = css`
  margin: 2rem 6rem;
  @media (max-width: 850px) {
    margin: 2rem 1rem 1rem 2.5rem;
  }
`;

const roleListStyle = css`
  margin: 0 8rem 0 3rem;
  @media (max-width: 850px) {
    margin: 0 3rem;
  }

  h4 {
    font-weight: 600;
  }
`;

const techListStyle = css`
  margin-right: 8rem;
  @media (max-width: 850px) {
    margin-right: 3rem;
  }

  h4 {
    font-weight: 600;
  }

  h5 {
    margin: 0.5rem 2rem;
    text-decoration: underline;
  }

  p {
    margin-left: 3rem;
  }
`;

// export type CompanyProps = {
//   companyName: string;
//   positionTitle: string;
//   dateRange: string;
//   location: string;
//   backgroundColor: string;
//   fontColor: string;
//   roles: CompanyRole[];
// };

// type CompanyRole = {
//   roleResponsibilities: React.ReactNode[];
//   technologiesUsed: TechnologyUsed[];
// };

// type TechnologyUsed = {
//   techType: string;
//   tech: string;
// };

export const Company = ({
  companyName,
  companyWebsite,
  dateRange,
  location,
  positionTitle,
  roles,
  backgroundColor,
  fontColor,
}) => {
  return (
    <section
      style={{
        padding: `4rem 0`,
        background: backgroundColor,
        color: fontColor,
      }}
    >
      <div style={{ margin: `0 auto`, maxWidth: `1040px` }}>
        <div css={companyHeaderContainerStyle}>
          <div css={companyHeaderStyle}>
            <div css={companyNameAndTitleStyle}>
              <h2 style={{ marginBottom: `0.25rem` }}>
                <a
                  href={companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: `${fontColor}` }}
                >
                  {companyName}
                </a>
              </h2>
              <h4 css={companyTitleStyle}>{positionTitle}</h4>
            </div>
            <h4 css={companyDurationStyle}>{dateRange}</h4>
          </div>
          <h4>{location}</h4>
        </div>
        {roles.map((role, i) => (
          <React.Fragment key={i}>
            <div css={rolesTextStyle}>
              {role.positionTitle ? <h3>{role.positionTitle}</h3> : null}
              <h4>Roles and Responsibilities</h4>
              <ul css={roleListStyle}>
                {role.roleResponsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div css={techTextStyle}>
              <h4>Technologies Used</h4>
              <div css={techListStyle}>
                {role.technologiesUsed.map(({ techType, tech }, i) => (
                  <React.Fragment key={i}>
                    <h5>{techType}</h5>
                    <p>{tech}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
