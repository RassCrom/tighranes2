import React, { useRef } from 'react';
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
import EighthStory from './Chapters/EighthStory/EighthStory';

const StoryText = () => {
  const introRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);
  const seventhRef = useRef(null);
  const eighthRef = useRef(null);
  const sourcesRef = useRef(null);
  const authorRef = useRef(null);

  return (
    <>
      <div className={styles.textOuter}>
        <IntroStory ref={introRef} />
        <ContentStory
          scrollToFirst={() => firstRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          scrollToSecond={() => secondRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          scrollToThird={() => thirdRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          scrollToFourth={() => fourthRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          scrollToFifth={() => fifthRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          scrollToSixth={() => sixthRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          scrollToSeventh={() => seventhRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          scrollToEighth={() => eighthRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          scrollToSources={() => sourcesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          scrollToAuthor={() => authorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        />
        <FirstStory ref={firstRef} />
        <SecondStory ref={secondRef} />
        <ThirdStory ref={thirdRef} />
        <FourthStory ref={fourthRef} />
        <FifthStory ref={fifthRef} />
        <SixthStory ref={sixthRef} />
        <SeventhStory ref={seventhRef} />
        <EighthStory ref={eighthRef} />
        <footer className={styles.footer}>
          <div className={styles.footerImg}></div>
          <div className={styles.footerContent}>
            <Ref ref={sourcesRef} />
            <Author ref={authorRef} />
          </div>
        </footer>
      </div>
    </>
  );
};

export default StoryText;