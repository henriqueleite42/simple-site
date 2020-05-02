import React, { useState } from "react";

import { useGlobalState } from "../../Redux/reducers/state";

import Language from "../../Constants/Language";

import style from "./style.module.scss";

const loadTab = (tab: string) => {
  const Element = React.lazy(() => import(`./${tab}`));

  return <Element />;
};

const Settings: React.FC = () => {
  const GlobalState = useGlobalState();
  const lang = Language[GlobalState.language].settings.tabs;

  const [tab, setTab] = useState<string>("General");

  const changeTab = (newTab: string) => {
    if (newTab !== tab) setTab(newTab);
  };

  return (
    <div className={style["container"]}>
      <div className={style["left"]}>
        <div className={style["tab-item"]}>
          <span onClick={() => changeTab("General")}>{lang.general}</span>
        </div>
      </div>
      {loadTab(tab)}
    </div>
  );
};

export default Settings;
