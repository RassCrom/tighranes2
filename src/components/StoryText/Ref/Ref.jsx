import styles from './Ref.module.scss'

const Ref = () => {
  return (
    <div className={styles.ref}>
        <h1 className={styles.footerHeading}>
            References
        </h1>
        <div className={styles.footerText}>
            <div className={styles.footerTextLinks}>
                <h2 className={styles.footerSubheading}>Maps</h2>
                <ul className={styles.footerTextList}>
                    <li>
                        <a href='#'>Armenia 95 BC</a>
                    </li>
                    <li>
                        <a href='#'>Armenia under Tigranes</a>
                    </li>
                </ul>
            </div>
            <div className={styles.footerTextLinks}>
                <h2 className={styles.footerSubheading}>Data</h2>
                <ul className={styles.footerTextList}>
                    <li>
                        <a href='#'>WorldHistory</a>
                    </li>
                    <li>
                        <a href='#'>Wikipedia</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Ref;