import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.contact}>
        <h1>Contact</h1>
        <p>
          <strong>Location:</strong> Ontario, Canada
        </p>
        <p>
          <strong>Email:</strong> tjcchen.engineer@gmail.com
        </p>
      </div>
      <div className={styles.media}>
        <h1>Social Media</h1>
        <p>
          <strong>GitHub:</strong>{" "}
          <Link href="https://github.com/tjcchen" target="_blank">
            https://github.com/tjcchen
          </Link>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <Link href="https://linkedin.com/in/andy-chen-engineer/" target="_blank">
            https://linkedin.com/in/andy-chen-engineer/
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;