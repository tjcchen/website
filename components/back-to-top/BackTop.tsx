import React from "react";
import { MdArrowUpward } from "react-icons/md";
import styles from "./BackTop.module.scss";

const BackTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.backTop} onClick={handleClick}>
      <MdArrowUpward color="black" fontSize="24px" />
    </div>
  );
};

export default BackTop;
