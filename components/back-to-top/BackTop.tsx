import React, { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import styles from "./BackTop.module.scss";

const THRESHOLD_VALUE = 180;

const BackTop = () => {
  const [isActive, setIsActive] = useState(false);

  // backToTop button click
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    currentScroll > THRESHOLD_VALUE ? setIsActive(true) : setIsActive(false);
  };

  // onmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // remove event listener when useEffect hook is removed
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.backTop} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      <MdArrowUpward color="black" fontSize="24px" />
    </div>
  );
};

export default BackTop;
