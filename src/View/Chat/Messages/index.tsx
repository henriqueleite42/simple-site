import React, { useState, useEffect, useLayoutEffect } from "react";

import Message, { MessageInterface } from "../Message";

import Scroll from "../../../Functions/Scroll";

import style from "./style.module.scss";

// TEMP
import tempMessages from "../../../Temp/messages";

const Messages: React.FC<{ chatWith: string }> = ({ chatWith }) => {
  const ScrollControls = new Scroll("messages-container");

  const [messages, setMessages] = useState<Array<MessageInterface>>([]);

  useLayoutEffect(() => {
    setMessages(tempMessages);
  }, [chatWith]);

  useEffect(() => {
    ScrollControls.scrollBottom();
  }, [messages]);

  return (
    <div className={style["container"]} id="messages-container">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default Messages;
