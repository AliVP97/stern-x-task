import styles from "./Loader.module.scss";

export const Loader = () => (
  <div className={styles.loader}>
    <div>
      <div className={styles.loading}></div>
    </div>
  </div>
);
