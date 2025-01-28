import Counter from "./Counter";
import styles from "./css/HistoryCount.module.css";

const HistoryCount = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <div className="col-6 col-md-3 mb-4">
          <div className={styles.statItem}>
            <Counter className={styles.statNumber} end={98} duration={3} />
            <div className={styles.statLabel}>COURTS</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className={styles.statItem}>
            <Counter className={styles.statNumber} end={65} duration={3} />
            <div className={styles.statLabel}>COACHES</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className={styles.statItem}>
            <Counter className={styles.statNumber} end={10} duration={3} />
            <div className={styles.statLabel}>YEARS</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className={styles.statItem}>
            <Counter className={styles.statNumber} end={15} duration={3} />
            <div className={styles.statLabel}>CLUBS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCount;
