import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <>
      <div className={styles.caption}>
        <div className={styles.pv_shimmer_loader}></div>
      </div>
      <div className={styles.container}>
        {/* Left Tab Header Skeleton */}
        <div className={styles.header}>
          <div className={styles.header_item}>
            <div className={styles.pv_shimmer_loader}></div>
          </div>
          <div className={styles.header_item}>
            <div className={styles.pv_shimmer_loader}></div>
          </div>
          <div className={styles.header_item}>
            <div className={styles.pv_shimmer_loader}></div>
          </div>
          <div className={styles.header_item}>
            <div className={styles.pv_shimmer_loader}></div>
          </div>
          <div className={styles.header_item}>
            <div className={styles.pv_shimmer_loader}></div>
          </div>
        </div>
        {/* Right Tab Body Skeleton */}
        <div className={styles.body}>
          <div className={styles.pv_shimmer_loader}></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
