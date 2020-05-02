import React from "react";
import { useDispatch } from "react-redux";

import { useGlobalState } from "../../../Redux/reducers/state";

import UtilsString from "../../../Utils/String";

import Language, { AllLangs } from "../../../Constants/Language";

import SelectBox from "../../../Components/SelectBox";

import style from "./style.module.scss";

const General: React.FC = () => {
  const dispatch = useDispatch();
  const GlobalState = useGlobalState();
  const lang = Language[GlobalState.language].settings.general;

  // Languages
  const optionsLanguage = [];
  for (const code in AllLangs) {
    optionsLanguage.push({
      option: AllLangs[code as keyof typeof AllLangs],
      value: code
    });
  }

  // Themes
  const optionsTheme = [
    {
      option: lang.themeDark,
      value: "dark"
    },
    {
      option: lang.themeLight,
      value: "light"
    }
  ];

  return (
    <div className={style["container"]}>
      {/*    LANGUAGE    */}
      <div className={style["item"]}>
        <span>{lang.language}</span>
        <SelectBox
          width={30}
          type={2}
          options={optionsLanguage}
          value={{
            option: AllLangs[GlobalState.language],
            value: GlobalState.language
          }}
          onSelect={(value: keyof typeof Language) => {
            if (value !== GlobalState.language) {
              dispatch({ type: "state/LANGUAGE", language: value });
            }
          }}
        />
      </div>
      {/*    THEME    */}
      <div className={style["item"]}>
        <span>{lang.theme}</span>
        <SelectBox
          width={30}
          type={2}
          options={optionsTheme}
          value={{
            option:
              lang[
                `theme${UtilsString.captalizeFirst(
                  GlobalState.theme
                )}` as keyof typeof lang
              ],
            value: GlobalState.theme
          }}
          onSelect={(value: typeof GlobalState.theme) => {
            if (value !== GlobalState.theme) {
              dispatch({ type: "state/THEME", theme: value });
            }
          }}
        />
      </div>
    </div>
  );
};

export default General;
