import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>&copy; 2023 TJCCHEN.COM All rights reserved.</div>
      <div>This website is powered by Nginx, Docker and Amazon AWS.</div>
    </footer>
  );
};

export default Footer;
