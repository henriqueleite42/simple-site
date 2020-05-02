import React from "react";

import style from "./style.module.scss";

export interface ButtonProps {
  text: string;
  round?: boolean;
  width?: number;
  padding?: "tiny" | "normal";
  type?: "primary" | "secondary";
  onClick?: Function;
}

const Button: React.FC<ButtonProps> = ({
  text,
  width,
  padding,
  round,
  type,
  onClick
}) => {
  return (
    <div
      style={{ width: `${width || 100}%` }}
      data-round={(!!round).toString()}
      data-type={type}
      data-padding={padding || "normal"}
      className={style["container"]}
      onClick={e => (onClick ? onClick(e) : false)}
    >
      <span>{text}</span>
    </div>
  );
};

export default Button;
