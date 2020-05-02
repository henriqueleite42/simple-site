import React, { useState, useEffect } from "react";

import style from "./style.module.scss";

interface TabInterface {
  id: string;
  type: "user" | "group";
  name: string;
  img: string;
  newMsg: boolean;
  lastMsg: {
    sent: boolean;
    isFile?: boolean;
    isImg?: boolean;
    message?: string;
  };
}

const Users: React.FC<{ chatWith: string | null; setChatWith: Function }> = ({
  chatWith,
  setChatWith
}) => {
  const [tabs, setTabs] = useState<{ [key: string]: TabInterface }>({});

  // useEffect(() => {
  //   setTabs({});
  // }, []);

  const renderTabs = () => {
    const ArrayTabs = [];

    for (const id in tabs) {
      ArrayTabs.push(<div key={id} data-active={chatWith === id}></div>);
    }

    return ArrayTabs;
  };

  return <>{renderTabs()}</>;
};

export default Users;
