// External Import
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// Components
import Medal from "./Medal";

// Style
import style from "./style.module.scss";

interface Props {
  medals: Array<IconProp>;
}

// Render
const MedalContainer: React.FC<Props> = ({ medals }) => {
  const trueMedals = medals.slice(0, 5);

  return (
    <div className={style["medals"]}>
      {trueMedals.map((medal, index) => (
        <Medal key={index} icon={medal} />
      ))}
    </div>
  );
};

export default MedalContainer;
