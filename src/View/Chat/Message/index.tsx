import React from "react";

import style from "./style.module.scss";

export interface MessageInterface {
  text: string;
  to: string;
  from: string;
  service: string;
  image: string;
  sendTime: Date;
  reciveTime: Date | null;
  readTime: Date | null;
}

const Message: React.FC<MessageInterface> = message => {
  const time = `${message.sendTime
    .getHours()
    .toString()
    .padStart(2, "0")}:${message.sendTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <div
      data-send={message.from === "USER_ID" ? "true" : "false"}
      className={style["container"]}
    >
      <div className={style["message"]}>
        <span>{message.from}</span>
        {message.image && <img src={message.image} alt="img" />}
        <p>{message.text}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Message;
