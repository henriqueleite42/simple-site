import React, { useState } from "react";

import Button from "../../Components/Button";
import InputText from "../../Components/InputText";

import { useGlobalState } from "../../Redux/reducers/state";

import Visibility from "../../Functions/Visibility";

import Language from "../../Constants/Language";

import style from "./style.module.scss";

interface DataInterface {
  email: string;
  password: string;
}

const LoginPopUp: React.FC = () => {
  const GlobalState = useGlobalState();
  const lang = Language[GlobalState.language].login;
  const VisibilityControls = new Visibility("login-popup");

  const [data, setData] = useState<DataInterface>({
    email: "",
    password: ""
  });

  const handleChange = (newDataPartial: Partial<DataInterface>) =>
    setData({
      ...data,
      ...newDataPartial
    });

  return (
    <div id="login-popup" className={style["container"]}>
      <InputText
        placeholder={lang.email}
        value={data.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange({ email: e.target.value })
        }
      />
      <InputText
        type="password"
        placeholder={lang.password}
        value={data.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange({ password: e.target.value })
        }
      />
      <div className={style["buttons"]}>
        <Button
          width={50}
          padding="tiny"
          round={true}
          text={lang.signIn}
          type="primary"
        />
        <span onClick={() => VisibilityControls.hide()}>Cancelar</span>
      </div>
    </div>
  );
};

export default LoginPopUp;
