import Author from './Author/Author';
import ContentStory from './Chapters/ContentStory/ContentStory';
import FirstStory from './Chapters/FirstStory/FirstStory';
import SecondStory from './Chapters/SecondStory/SecondStory';
import IntroStory from './Chapters/IntroStory/IntroStory';
import Ref from './Ref/Ref';
import styles from './StoryText.module.scss';
import ThirdStory from './Chapters/ThirdStory/ThirdStory';
import FourthStory from './Chapters/FourthStory/FourthStory';
import FifthStory from './Chapters/FifthStory/FifthStory';
import SixthStory from './Chapters/SixthStory/SixthStory';
import SeventhStory from './Chapters/SeventhStory/SeventhStory';
import EighthStory from './Chapters/EighthStory/EighthtStory';

const StoryText = () => {
  return (
  <>
    <div className={styles.textOuter}>
      <IntroStory />
      <ContentStory />
      <FirstStory />
      <SecondStory />
      <ThirdStory />
      <FourthStory />
      <FifthStory />
      <SixthStory />
      <SeventhStory />
      <EighthStory />
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