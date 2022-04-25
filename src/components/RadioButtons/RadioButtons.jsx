import React, { useEffect, useState } from "react";
import styles from "./RadioButton.module.scss";

export const RadioButtons = ({
  values = [],
  type = "radio",
  handleClick = () => "",
}) => {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    handleClick(values[selected]);
  }, [handleClick, selected, values]);

  const createButtons = values.map((value, index) => (
    <button
      key={value}
      className={
        styles[`button--${type}${selected === index ? "--selected" : ""}`]
      }
      onClick={() => setSelected(index)}
    >
      <div
        style={{ backgroundColor: value }}
        className={styles[`button--${type}--content`]}
      >
        {value}
      </div>
    </button>
  ));

  return <div className={styles.container}>{createButtons}</div>;
};
