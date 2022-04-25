import React, { useEffect, useState, useCallback } from "react";
import styles from "./Cart.module.scss";
import { RadioButtons } from "../RadioButtons/RadioButtons";

export const Cart = ({ article }) => {
  const {
    title = "",
    vendor = "",
    price = 0,
    compare_at_price = 0,
    variants = [],
    description = "",
  } = article || {};
  const [sizes, setSizes] = useState([]);
  const [count, setCount] = useState(1);

  const createdColors = variants.reduce(
    (acc, variant) =>
      acc.includes(variant.option1) ? acc : [...acc, variant.option1],
    []
  );

  const createSizes = useCallback(
    (color) =>
      variants
        .filter((variant) => variant.option1 === color)
        .map((variant) => variant.option2),
    [variants]
  );

  const handleMinus = () =>
    setCount((count) => (count - 1 > 1 ? count - 1 : 1));
  const handlePlus = () => setCount((count) => count + 1);

  useEffect(() => {
    setSizes(createSizes("Red"));
  }, [createSizes]);

  return (
    <div className={styles.container}>
      <span className={styles["text--small--opaque"]}>{vendor}</span>
      <span className={styles["text--larger"]}>{title}</span>
      <div className={styles.row}>
        <span className={styles["text--normal"]}>{`$ ${price}`}</span>
        <span
          style={{ textDecoration: "line-through" }}
          className={styles["text--small--opaque"]}
        >{`$ ${compare_at_price}`}</span>
      </div>
      <div className={styles.row}>
        <label className={styles["text--small--opaque"]}>Color:</label>
        <RadioButtons
          values={createdColors}
          handleClick={(valueSelected) => setSizes(createSizes(valueSelected))}
        />
      </div>
      <div className={styles.row}>
        <label className={styles["text--small--opaque"]}>Size:</label>
        <RadioButtons values={sizes} type="box" />
      </div>
      <div className={styles["row--spaced"]}>
        <div className={styles["container--count"]}>
          <button className={styles["button--count"]} onClick={handleMinus}>
            -
          </button>
          {count}
          <button className={styles["button--count"]} onClick={handlePlus}>
            +
          </button>
        </div>
        <div className={styles.row}>
          <span className={styles["text--small--opaque"]}>Total price:</span>
          <span className={styles["text--small"]}>{`$ ${count * price}`}</span>
        </div>
      </div>
      <div className={styles.row}>
        <button className={styles["button"]} type="submit">
          Add to favorite
        </button>
        <button className={styles["button--invert"]} type="submit">
          Add to cart
        </button>
      </div>
      <div className={styles["text--small--opaque"]}>{description}</div>
    </div>
  );
};
