import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Visibility from "../../Functions/Visibility";

import style from "./style.module.scss";

interface SelectBoxProps {
  options: Array<OptionInterface>;
  onSelect: Function;
  value: OptionInterface;
  type?: 1 | 2;
  width?: number;
}

export interface OptionInterface {
  option: string | number;
  value: string | number;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  onSelect,
  value,
  type,
  width
}) => {
  const id = Math.random().toString();

  const VisibilityControls = new Visibility(id);

  const select = (value: string | number) => {
    VisibilityControls.hide();
    onSelect(value);
  };

  return (
    <div
      className={style["container"]}
      data-type={type || "1"}
      style={{ width: `${width || 100}%` }}
    >
      <div
        className={style["actual"]}
        onClick={() => VisibilityControls.invert("show")}
      >
        <span>{value.option}</span>
        <FontAwesomeIcon icon="sort-down" />
      </div>
      <div id={id} className={style["options"]}>
        {options.map((option, index) => (
          <span
            key={index}
            data-selected={(value.value === option.value).toString()}
            onClick={() => select(option.value)}
            className={style["option"]}
          >
            {option.option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SelectBox;
