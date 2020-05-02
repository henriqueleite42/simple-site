// External Import
import React from "react";

// Components
import Skill from "./Skill";

// Style
import style from "./style.module.scss";

interface Props {
  skills: Array<string>;
}

// Render
const SkillsContainer: React.FC<Props> = ({ skills }) => {
  const trueSkills = skills.slice(0, 10);

  return (
    <div className={style["skills"]}>
      {trueSkills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsContainer;
