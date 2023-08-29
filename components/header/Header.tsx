"use client";

import { useContext, useEffect } from "react";
import { MenuContext } from "@/app/menu-provider";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MdMenu, MdOutlineClose } from "react-icons/md";

const Header = () => {
  const { isMenuActive, setIsMenuActive } = useContext(MenuContext);

  const onMenuClick = () => {
    setIsMenuActive(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link href="/" className={styles.header__logo}>
          TJCCHEN.COM
        </Link>
        <div className={styles.header__right}>
          <Link href="/" className={styles.header__right__link}>
            Home
          </Link>
          <Link href="/experience" className={styles.header__right__link}>
            Experience
          </Link>
          <Link href="/skill" className={styles.header__right__link}>
            Skill
          </Link>
          <Link href="/download" className={styles.header__right__link}>
            Download
          </Link>
          <Link href="/contact" className={styles.header__right__link}>
            Contact
          </Link>
          <Link
            href="http://www.tjcchen.cn"
            className={styles.header__right__link}
          >
            EN / CN
          </Link>
        </div>
        <button className={styles.menu__btn} onClick={onMenuClick}>
          {isMenuActive ? (
            <MdOutlineClose color="white" fontSize="24px" />
          ) : (
            <MdMenu color="white" fontSize="24px" />
          )}
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
