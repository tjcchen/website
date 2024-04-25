"use client";

import { useEffect, useState } from "react";
import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";

const Contact = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/contact");
      const data = await response.json();
      setContactData(data);
    };
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.caption}>WELCOME TO BUILD A CONNECTION WITH ME</h1>
      <div className={styles.box}>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>
            <strong>Phone:</strong> +86 (185) 1825-1024
          </p>
          <p>
            <strong>Location:</strong> Beijing, China
          </p>
          <p>
            <strong>Email:</strong> tjcchen.engineer@gmail.com
          </p>
        </div>
        <div className={styles.media}>
          <h3>Social Media</h3>
          <p>
            <strong>GitHub:</strong>{" "}
            <Link href="https://github.com/tjcchen" target="_blank">
              https://github.com/tjcchen
            </Link>
          </p>
          <p>
            <strong>Twitter:</strong>{" "}
            <Link href="https://twitter.com/tjcchen" target="_blank">
              https://twitter.com/tjcchen
            </Link>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <Link
              href="https://linkedin.com/in/andy-chen-engineer/"
              target="_blank"
            >
              https://linkedin.com/in/andy-chen-engineer/
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
