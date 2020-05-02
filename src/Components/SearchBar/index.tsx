import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputText from "../InputText";

import style from "./style.module.scss";

export interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={style["container"]}>
      <div className={style["search-bar"]}>
        <InputText width={90} placeholder={placeholder} />
        <div className={style["button"]} onClick={() => setOpen(!open)}>
          <FontAwesomeIcon
            icon={open ? "chevron-circle-up" : "chevron-circle-down"}
          />
        </div>
        <div className={style["button"]}>
          <FontAwesomeIcon icon="search" />
        </div>
      </div>
      {open && children}
    </div>
  );
};
export default SearchBar;
