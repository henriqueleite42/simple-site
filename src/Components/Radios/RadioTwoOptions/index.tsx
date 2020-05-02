import React from "react";

import style from "./style.module.scss";

interface Props {
  label?: string;
  value: string | boolean | number;
  width: number;
  options: [
    {
      option: string | boolean | number;
      value: string | boolean | number;
    },
    {
      option: string | boolean | number;
      value: string | boolean | number;
    }
  ];
  onSelect: Function;
}

const RadioTwoOptions: React.FC<Props> = ({
  label,
  value,
  width,
  options,
  onSelect
}) => {
  return (
    <div
      className={style["radio-choice-container"]}
      style={{ width: `${width || 100}%` }}
    >
      <div>
        <span>{label}</span>
      </div>
      <div className={style["radio-choice"]}>
        <div
          data-selected={(value === options[0].value).toString()}
          onClick={() => onSelect(options[0].value)}
        >
          <span>{options[0].option}</span>
        </div>
        <div
          data-selected={(value === options[1].value).toString()}
          onClick={() => onSelect(options[1].value)}
        >
          <span>{options[1].option}</span>
        </div>
      </div>
    </div>
  );
};

export default RadioTwoOptions;
