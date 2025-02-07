import styles from './ContentStory.module.scss'

const ContentStory = () => {
  return (
    <>
      <div className={styles.contentTable}>
        <h2 className={styles.headingContent}>
          Content
        </h2>
        <div className={styles.contentInner}>
          <ul className={styles.listContent}>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>I</span> 
              <a className={styles.listItemLinks}>Map of Great Armenia</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>II</span> 
              <a className={styles.listItemLinks}>Prologue</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>III</span> 
              <a className={styles.listItemLinks}>First campaign at Cappadocia</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>IV</span> 
              <a className={styles.listItemLinks}>Nemesis — Parthia</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>V</span> 
              <a className={styles.listItemLinks}>From sea to sea</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>VI</span> 
              <a className={styles.listItemLinks}>Second campaign at Cappadocia</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>VII</span> 
              <a className={styles.listItemLinks}>Apogee of the borders</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>VIII</span> 
              <a className={styles.listItemLinks}>War against Rome</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>IX</span> 
              <a className={styles.listItemLinks}>Epilogue</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>X</span> 
              <a className={styles.listItemLinks}>Influence nowadays</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>XI</span> 
              <a className={styles.listItemLinks}>References</a> 
            </li>
            <li className={styles.listItem}>
              <span className={styles.itemLinksNumber}>XII</span> 
              <a className={styles.listItemLinks}>Authors</a> 
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContentStory;