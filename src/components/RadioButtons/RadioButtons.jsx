import React, { useState } from "react";
import styles from "./RadioButton.module.scss";

export const RadioButtons = ({
  values = [],
  type = "radio",
  reference = React.createRef(),
}) => {
  const [selected, setSelected] = useState(0);

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
        ref={selected === index ? reference : null}
      >
        {value}
      </div>
    </button>
  ));

  return <div className={styles.container}>{createButtons}</div>;
};
