import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputText from "../../../Components/InputText";

import Visibility from "../../../Functions/Visibility";

import style from "./style.module.scss";

const WriteBar: React.FC = () => {
  const [text, setText] = useState<string>("");
  const VisibilityControls = new Visibility("messages-left", true);

  return (
    <div className={style["write-bar"]}>
      <div
        className={style["button"]}
        onClick={() => VisibilityControls.invert("hide")}
      >
        <FontAwesomeIcon icon="users" />
      </div>
      <InputText
        value={text}
        width={90}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <div className={style["button"]}>
        <FontAwesomeIcon icon="paperclip" />
      </div>
      <div className={style["button"]}>
        <FontAwesomeIcon icon="paper-plane" />
      </div>
    </div>
  );
};

export default WriteBar;
