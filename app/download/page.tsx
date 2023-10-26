import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";

const Download = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.caption}>DOWNLOAD DOCUMENTS</h1>
      <div className={styles.box}>
        <Link
          href="https://drive.google.com/file/d/1I0LV5G_y-KafYaGh0L6R7jqiotmvnUIi/view"
          target="_blank"
          className={styles.card}
        >
          <strong>Resume</strong>
          <BiDownload fontSize={48} className={styles.download} />
        </Link>
        <Link
          href="https://drive.google.com/file/d/1teY50DKLDBiSOvYwB7gPWinq-Kk2lG12/view"
          target="_blank"
          className={styles.card}
        >
          <strong>IELTS</strong>
          <BiDownload fontSize={48} className={styles.download} />
        </Link>
        <Link
          href="javascript:;"
          className={styles.card}
        >
          <strong>Stay Tuned</strong>
          <BiDownload fontSize={48} className={styles.download} />
        </Link>
      </div>
    </main>
  );
};

export default Download;
