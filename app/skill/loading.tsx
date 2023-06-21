import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.heading} ${styles.fill}`}></div>
      <div
        className={`${styles.boldline} ${styles.firstline} ${styles.fill}`}
      ></div>
      <div className={`${styles.line} ${styles.fill}`}></div>
      <div className={`${styles.line} ${styles.fill}`}></div>
      <div
        className={`${styles.boldline} ${styles.lastline} ${styles.fill}`}
      ></div>
    </div>
  );
};

export default Loading;
