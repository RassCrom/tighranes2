import styles from './ContentStory.module.scss';

const ContentStory = ({
  scrollToIntro,
  scrollToFirst,
  scrollToSecond,
  scrollToThird,
  scrollToFourth,
  scrollToFifth,
  scrollToSixth,
  scrollToSeventh,
  scrollToEighth,
  scrollToSources,
  scrollToAuthor,
}) => {
  return (
    <div className={styles.contentTable}>
      <h2 className={styles.headingContent}>Content</h2>
      <div className={styles.contentInner}>
        <ul className={styles.listContent}>
          <li className={styles.listItem} onClick={scrollToFirst}>
            <span className={styles.itemLinksNumber}>I</span>
            <a className={styles.listItemLinks}>Prologue</a>
          </li>
          <li className={styles.listItem} onClick={scrollToSecond}>
            <span className={styles.itemLinksNumber}>II</span>
            <a className={styles.listItemLinks}>First campaign at Cappadocia</a>
          </li>
          <li className={styles.listItem} onClick={scrollToThird}>
            <span className={styles.itemLinksNumber}>III</span>
            <a className={styles.listItemLinks}>Nemesis — Parthia</a>
          </li>
          <li className={styles.listItem} onClick={scrollToFourth}>
            <span className={styles.itemLinksNumber}>IV</span>
            <a className={styles.listItemLinks}>From sea to sea</a>
          </li>
          <li className={styles.listItem} onClick={scrollToFifth}>
            <span className={styles.itemLinksNumber}>V</span>
            <a className={styles.listItemLinks}>Second campaign at Cappadocia</a>
          </li>
          <li className={styles.listItem} onClick={scrollToSixth}>
            <span className={styles.itemLinksNumber}>VI</span>
            <a className={styles.listItemLinks}>Apogee of the borders</a>
          </li>
          <li className={styles.listItem} onClick={scrollToSeventh}>
            <span className={styles.itemLinksNumber}>VII</span>
            <a className={styles.listItemLinks}>War against Rome</a>
          </li>
          <li className={styles.listItem} onClick={scrollToEighth}>
            <span className={styles.itemLinksNumber}>VIII</span>
            <a className={styles.listItemLinks}>Epilogue</a>
          </li>
          <li className={styles.listItem} onClick={scrollToSources}>
            <span className={styles.itemLinksNumber}></span>
            <a className={styles.listItemLinks}>References</a>
          </li>
          <li className={styles.listItem} onClick={scrollToAuthor}>
            <span className={styles.itemLinksNumber}></span>
            <a className={styles.listItemLinks}>Authors</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentStory;