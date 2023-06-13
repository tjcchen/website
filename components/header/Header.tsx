import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>tjcchen</div>
        <div className={styles.header__right}>
          <div className={styles.header__right__experience}>Experience</div>
          <div className={styles.header__right__contact}>Contact</div>
          <div className={styles.header__right__language}>EN / CN</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
