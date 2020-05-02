import React, { useState } from "react";

import Users from "./Users";
import Messages from "./Messages";
import WriteBar from "./WriteBar";

import Language from "../../Constants/Language";

import { useGlobalState } from "../../Redux/reducers/state";

import style from "./style.module.scss";

const Chat: React.FC = () => {
  const GlobalState = useGlobalState();
  const lang = Language[GlobalState.language].chat;

  const [chatWith, setChatWith] = useState<string | null>("a");

  return (
    <div className={style["container"]}>
      <div className={style["left"]} id="messages-left">
        <Users chatWith={chatWith} setChatWith={setChatWith} />
      </div>
      <div className={style["right"]}>
        {chatWith && (
          <>
            <Messages chatWith={chatWith} />
            <WriteBar />
          </>
        )}
        {!chatWith && (
          <div className={style["not-selected"]}>{lang.notSelected}</div>
        )}
      </div>
    </div>
  );
};

export default Chat;
