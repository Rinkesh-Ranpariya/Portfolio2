import React from "react";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div>
      {props.sections.map((section) => {
        return (
          <div className="experience">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="experiences-header" style={{ color: theme.text }}>
                {section.title}
              </h1>
            </Fade>
            {section["experiences"].map((experience) => {
              return <ExperienceCard experience={experience} theme={theme} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceAccordion;
