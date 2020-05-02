import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.module.scss";

export interface InputTextInterface {
  type?: "text" | "password";
  width?: number;
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: Function;
}

const InputText: React.FC<InputTextInterface> = ({
  width,
  placeholder,
  label,
  type,
  value,
  onChange
}) => {
  let input: HTMLInputElement | null;

  const [show, setShow] = useState<boolean>(!type || type === "text");

  return (
    <div
      style={{ width: `${width || 100}%` }}
      data-label={(!!label).toString()}
      className={style["container"]}
    >
      {label && <span>{label}</span>}
      <div
        className={style["input"]}
        onClick={() => (input ? input.focus() : false)}
      >
        <input
          type={show ? "text" : "password"}
          ref={ref => (input = ref)}
          placeholder={placeholder}
          value={value}
          onChange={e => (onChange ? onChange(e) : false)}
        />
        {type === "password" && (
          <FontAwesomeIcon
            onClick={() => setShow(!show)}
            icon={show ? "eye" : "eye-slash"}
          />
        )}
      </div>
    </div>
  );
};

export default InputText;
