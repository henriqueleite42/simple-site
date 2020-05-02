import React from "react";

import Left from "./Left";

import style from "./style.module.scss";

const Profile: React.FC = () => {
  return (
    <div className={style["container"]}>
      <Left />
      <div className={style["right"]}>
        <span>Ultimas Atualizações</span>
      </div>
    </div>
  );
};

export default Profile;
