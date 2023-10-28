import React from "react";
import { MdArrowUpward } from "react-icons/md";
import styles from "./BackTop.module.scss";

const BackTop = () => {
  const onClick = () => {
    console.log(111);
  }

  return (
    <div className={styles.backTop} onClick={onClick}>
      <MdArrowUpward color="black" fontSize="24px" />
    </div>
  );
};

export default BackTop;
