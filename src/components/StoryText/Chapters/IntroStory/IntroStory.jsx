import styles from './IntroStory.module.scss'
import storyStyles from '../../StoryText.module.scss'
import ArmFlag from '/images/arm-flag.png';
import FloatingArrow from '/images/spear-arr.png';

const IntroStory = () => {
  const handleScrollToContent = () => window.scrollTo({top: 750, behavior: 'smooth'});

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
        <div className={storyStyles.text}>
          <p className={styles.prelude}>
            Amid the cradle of ancient civilizations, the Kingdom of Armenia, under the reign of Tigranes the Great, ascended to unparalleled glory, blending cultural brilliance, military might, and enduring legacy.
          </p>
        </div>
        <div className={storyStyles.text}>
          <img onClick={handleScrollToContent} className={styles.floatingArrow} src={FloatingArrow} alt="arrow down" />
        </div>
      </div>
    </>
  );
};

export default IntroStory;