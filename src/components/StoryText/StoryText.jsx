import Author from './Author/Author';
import ContentStory from './Chapters/ContentStory/ContentStory';
import FirstStory from './Chapters/FirstStory/FirstStory';
import IntroStory from './Chapters/IntroStory/IntroStory';
import Ref from './Ref/Ref';
import styles from './StoryText.module.scss';

const StoryText = () => {
  return (
  <>
    <div className={styles.textOuter}>
      <IntroStory />
      <ContentStory />
      <FirstStory />

      <footer className={styles.footer}>
        <div className={styles.footerImg}></div>
        <div className={styles.footerContent}>
          <Ref />
          <Author />
        </div>
      </footer>
    </div>
  </>
  );
};

export default StoryText;