import styles from "../../styles/loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container} id="loading-items">
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
    </div>
  );
}
