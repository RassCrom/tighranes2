import styles from './IntroStory.module.scss'
import ArmFlag from '/images/arm-flag.png';
import FloatingArrow from '/images/spear-arr.png';

const IntroStory = () => {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.textImg}>
          <img src={ArmFlag} alt="Armenian flag" />
        </div>
        <div className={styles.textCard}>
          <div className={styles.cardDate}>
            95 - 55 BC
          </div>
          <h1 className={styles.cardTitle}>Tigranes the Great</h1>
        </div>
        <div className={styles.text}>
          <p className={styles.prelude}>
            Amid the cradle of ancient civilizations, the Kingdom of Armenia, under the reign of Tigranes the Great, ascended to unparalleled glory, blending cultural brilliance, military might, and enduring legacy.
          </p>
        </div>
        <div className={styles.text}>
          <img className={styles.floatingArrow} src={FloatingArrow} alt="arrow down" />
        </div>
      </div>
    </>
  );
};

export default IntroStory;