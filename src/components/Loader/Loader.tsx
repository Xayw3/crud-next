import styles from './loader.module.scss';

const Loader = () => (
  <div className={styles.overlay}>
    <div className={styles.loader}>
      <span />
    </div>
  </div>
);

export default Loader;