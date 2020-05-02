import React from "react";

import style from "./style.module.scss";

const Loader: React.FC = () => (
  <div className={style["container"]}>
    <div>
      {["one", "two", "three", "four"].map(item => (
        <div key={item} className={style[`bird-container-${item}`]}>
          <div className={`${style["bird"]} ${style[`bird-${item}`]}`} />
        </div>
      ))}
    </div>
    <span>Loading</span>
  </div>
);

export default Loader;
