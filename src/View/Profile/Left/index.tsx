import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGlobalState } from "../../../Redux/reducers/state";

import Money from "../../../Utils/Money";

import Language from "../../../Constants/Language";

import style from "./style.module.scss";

const USER_LEVEL = 15;
const USER_BALANCE_AVALIABLE = 2500.5;
const USER_BALANCE_RECEIVABLE = 500;
const USER_CURRENCY = "BRL";
const USER_TOTAL_JOBS = 25;

interface UserInfoInterface {
  name: string;
  value: string | number;
  title?: string;
}

const Left: React.FC = () => {
  const GlobalState = useGlobalState();
  const lang = Language[GlobalState.language].profile;

  const userInfo: Array<UserInfoInterface> = [
    {
      name: lang.level,
      value: USER_LEVEL
    },
    {
      name: lang.jobs.short,
      title: lang.jobs.complete,
      value: USER_TOTAL_JOBS
    },
    {
      name: lang.balance.available.short,
      title: lang.balance.available.complete,
      value: Money.toMoney(USER_BALANCE_AVALIABLE, USER_CURRENCY)
    },
    {
      name: lang.balance.receivable.short,
      title: lang.balance.receivable.complete,
      value: Money.toMoney(USER_BALANCE_RECEIVABLE, USER_CURRENCY)
    }
  ];

  return (
    <div className={style["container"]}>
      <div className={style["profile-picture"]}>
        <img
          src="https://sss.ukzn.ac.za/wp-content/uploads/2017/12/profile-placeholder.png"
          // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dailymoss.com%2Fwp-content%2Fuploads%2F2019%2F08%2Ffunny-profile-pic59.jpg&f=1&nofb=1"
          alt="profile_picture"
        />
        <div className={style["picture-edit"]}>
          <FontAwesomeIcon icon="edit" />
        </div>
      </div>
      <div className={style["user-info"]}>
        {userInfo.map((info, index) => (
          <div
            key={index}
            className={style["user-info-item"]}
            title={info.title}
          >
            <span>{info.name}</span>
            <span>{info.value}</span>
          </div>
        ))}
      </div>
      <div className={style["edit-info"]}>
        <div>
          <span>{lang.editInfo}</span>
        </div>
      </div>
    </div>
  );
};

export default Left;
