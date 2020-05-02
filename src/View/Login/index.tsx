import React, { useState } from "react";

import Button from "../../Components/Button";
import InputText from "../../Components/InputText";

import { useGlobalState } from "../../Redux/reducers/state";

import Language from "../../Constants/Language";

import style from "./style.module.scss";

interface DataInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const GlobalState = useGlobalState();
  const lang = Language[GlobalState.language].login;

  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [data, setData] = useState<DataInterface>({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (newDataPartial: Partial<DataInterface>) =>
    setData({
      ...data,
      ...newDataPartial
    });

  return (
    <div className={style["container"]}>
      <div className={style["form"]}>
        <div className={style["header"]}>
          <span>{isSignIn ? lang.signIn : lang.signUp}</span>
        </div>
        <div className={style["inputs"]}>
          {!isSignIn && (
            <>
              <InputText
                placeholder={lang.firstName}
                width={85}
                value={data.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange({ firstName: e.target.value })
                }
              />
              <InputText
                placeholder={lang.lastName}
                width={85}
                value={data.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange({ lastName: e.target.value })
                }
              />
            </>
          )}
          <InputText
            placeholder={lang.email}
            width={85}
            value={data.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ email: e.target.value })
            }
          />
          <InputText
            type="password"
            placeholder={lang.password}
            width={85}
            value={data.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ password: e.target.value })
            }
          />
        </div>
        <div className={style["buttons"]}>
          <Button
            width={35}
            round={true}
            text={!isSignIn ? lang.signIn : lang.signUp}
            onClick={() => setIsSignIn(!isSignIn)}
            type="secondary"
          />
          <Button
            width={35}
            round={true}
            text={!isSignIn ? lang.signUp : lang.signIn}
            type="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
