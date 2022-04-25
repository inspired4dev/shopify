import React from "react";
import styles from "./Layout.module.scss";
export const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
