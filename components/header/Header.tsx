import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link href="/" className={styles.header__logo}>
          <Image
            src="/assets/icons/logo.jpg"
            width={72}
            height={72}
            alt="tjcchen.com"
          />
        </Link>
        <div className={styles.header__right}>
          <Link href="/experience" className={styles.header__right__link}>
            Experience
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
      </div>
    </header>
  );
};

export default Header;
