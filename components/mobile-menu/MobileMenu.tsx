"use client";

import { useState } from "react";
import styles from "./MobileMenu.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const onCloseHandler = () => {
    setIsActive(true);
  };

  return (
    <div
      style={{
        display: isActive ? "block" : "none",
      }}
      className={styles.container}
    >
      <div className={styles.menu__backdrop}></div>
      <div className={styles.menu__content}>
        <MdOutlineClose
          fontSize={32}
          className={styles.menu__close}
          onClick={onCloseHandler}
        />
        <div className={styles.menu__items}>
          <Link href="/" className={styles.menu__item}>
            Home
          </Link>
          <Link href="/experience" className={styles.menu__item}>
            Experience
          </Link>
          <Link href="/contact" className={styles.menu__item}>
            Contact
          </Link>
          <Link href="http://www.tjcchen.cn" className={styles.menu__item}>
            EN / CN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
