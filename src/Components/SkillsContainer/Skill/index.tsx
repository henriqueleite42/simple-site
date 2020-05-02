// External Import
import React from "react";

// Constants
import skills from "../../../Constants/skills";

// Style
import style from "./style.module.scss";

interface Props {
  skill: string;
}

// Render
const Skill: React.FC<Props> = ({ skill }) => {
  if (!skills[skill]) return <></>;

  return (
    <div data-skill={skills[skill].color} className={style["skill"]}>
      {skills[skill].nome}
    </div>
  );
};

export default Skill;
