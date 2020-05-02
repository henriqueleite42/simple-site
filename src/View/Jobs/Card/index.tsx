import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import MedalContainer from "../../../Components/MedalContainer";
import SkillsContainer from "../../../Components/SkillsContainer";

import style from "./style.module.scss";

export interface JobCard {
  text: string;
  skills: Array<string>;
  medals: Array<IconProp>;
}

// Render
const Card: React.FC<JobCard> = ({ text, medals, skills }) => {
  return (
    <div className={style["container"]}>
      <div className={style["header"]}>
        <div className={style["title"]}>
          <span>
            Extremely Super Hyper Omega Double Desnecessary Large Title
          </span>
        </div>
        <MedalContainer medals={medals} />
      </div>
      <div className={style["body"]}>
        <p>{`${text.substr(0, 475).trim()}...`}</p>
      </div>
      <SkillsContainer skills={skills} />
    </div>
  );
};

export default Card;
