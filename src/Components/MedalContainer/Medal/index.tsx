// External Import
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import style from "./style.module.scss";

interface Props {
  icon: IconProp;
}

// Render
const Medal: React.FC<Props> = ({ icon }) => {
  return (
    <div data-medal={icon} className={style["medal"]}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Medal;
