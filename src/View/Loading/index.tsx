import React from "react";

import Loader from "../../Components/Loader";

import style from "./style.module.scss";

const Loading: React.FC = () => (
  <div className={style["container"]}>
    <Loader />
  </div>
);

export default Loading;
