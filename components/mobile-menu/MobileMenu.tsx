"use client";

import { useState, useContext, useEffect } from "react";
import { MenuContext } from "@/app/menu-provider";
import styles from "./MobileMenu.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

const MobileMenu = () => {
  const { isMenuActive, setIsMenuActive } = useContext(MenuContext);

  const onCloseHandler = () => {
    setIsMenuActive(false);
  };

  return (
    <div
      className={styles.container}
      style={{
        display: isMenuActive ? "block" : "none",
      }}
    >
      <div className={styles.menu__backdrop} onClick={onCloseHandler}></div>
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
          <Link href="/skill" className={styles.menu__item}>
            Skill
          </Link>
          <Link href="/download" className={styles.menu__item}>
            Download
          </Link>
          <Link href="/contact" className={styles.menu__item}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
