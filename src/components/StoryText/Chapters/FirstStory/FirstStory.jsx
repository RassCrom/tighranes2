import storyStyles from '../../StoryText.module.scss';
import StoryHeading from '../../StoryHeading/StoryHeading';
import ImgBlock from '../../Blocks/ImgBlock';
import QuoteBlock from '../../Blocks/QuoteBlock';

const FirstStory = ({ref}) => {
  return (
    <div className={storyStyles.storyOuter} ref={ref}>
      <StoryHeading 
        number='I'
        subhead='The struggle at Dawn'
        caption='prologue'
      />
      <div className={storyStyles.storyText}>
        <p className={storyStyles.text}>
          He was born at 140 BCE in the capital of Armenia - Artaxat, the son of Tigranes I who ruled Armenia as well as father of Tigranes I - Artaxias I was a king. From the Artaxiad dynasty. 
        </p>
        <ImgBlock img='/images/tigranes-2.png' caption="Tigranes the Great" />
        <p className={storyStyles.text}>
          The reigns of Tigranes II&apos;s predecessors, his grandfather and father, were relatively peaceful. Although even in those days Armenia was considered a strong power. Artaxias, founder of Artaxiad dynasty, united the Armenian Highlands region under the Great Armenia.
        </p>
        <QuoteBlock 
          quote='The only true wisdom is in knowing you know nothing' 
          cite="Socrates"
        />
        <p className={storyStyles.text}>
          After the death of Artaxia I in 160 BCE, Artavasd I became a king. Later on, he entered into war with Parthia in 120-115 and was defeated. He lost not only a war but also his throne and at that time he was forced to give Tigranes the Great to the Parthia as hostage. Next king was Tigranes I.
        </p>
        <ImgBlock img='/images/artavasdes-1.png' caption='Artavasdes I' />
        <p className={storyStyles.text}>
          Tigranes I waged an intense war against Parthia to assert his leadership in the region. According to Strabo, the conflict was fierce, with Tigranes demonstrating remarkable resistance and strength.
        </p>
        <ImgBlock img='/images/tigranes-1.png' caption='Tigranes I' />
        <QuoteBlock 
          quote='The Parthians took possession of the Babylonian countries, but not Armenia. Although attacks occurred frequently, the country was not conquered by force.'
          cite='Unknown'
        />
      </div>
      <div className={storyStyles.innerDivider}></div>
      <StoryHeading 
        number=''
        subhead='Breaking free'
        caption='prologue'
      />
      <div className={storyStyles.storyText}>
        <p className={storyStyles.text}>
          In the middle of the 2nd century BC, Armenia was going through a difficult period. The country, located at the crossroads of the interests of the great powers - Rome, Parthia and the Seleucids, fought to preserve its independence. At this time, the young Tigran, the future Tigran II the Great, found himself at the center of political intrigues that determined his fate.
        </p>
        <QuoteBlock 
          quote='Historia magistra vitae est'
          cite='Marcus Tullius Cicero'
        />
        <p className={storyStyles.text}>
          Tigran, son of the Armenian king Artavazd I, was sent to Parthia as a hostage. It was common practice at the time to hold members of noble families captive to ensure the loyalty of their home states. Parthia, a powerful empire stretching from Mesopotamia to Central Asia, was both a threat and a potential ally to Armenia.
        </p>
        <p className={storyStyles.text}>
          Life in captivity was not only a test for Tigran, but also a school. The Parthian court was a place where cultures, languages, and traditions intersected. Tigran, a man of great intelligence and ambition, used this time to study the Parthian political system, military tactics, and diplomacy. He observed how the Parthian kings governed their vast empire, and perhaps even then he was thinking about how to apply this knowledge in the future to strengthen Armenia.
        </p>
        <ImgBlock img='/images/map-1.png' caption='Map of Armenia in 100 BC' size='big' />
        <p className={storyStyles.text}>
          While Tigran was in captivity, important events were taking place in Armenia. His father, Artavazd I, sought to strengthen the country's position, but Armenia remained in the shadow of its more powerful neighbors. After Artavazd's death, the throne passed to his brother, Tigran I. However, Tigran I's reign was short-lived and unstable. Armenia needed a strong leader who could unite the country and protect its interests.
        </p>
        <p className={storyStyles.text} style={{color: '#EEC06A'}}>
          It was at this point that the Parthian king Mithridates II, realizing the strategic importance of Armenia, decided to release Tigran. This decision was dictated not only by sympathy for the young hostage, but also by calculation. Mithridates II hoped that Tigran, having ascended the Armenian throne, would become an ally of Parthia in the fight against the common enemy - Rome and the weakening Seleucid Empire.
        </p>
        <p className={storyStyles.text}>
          His experience in Parthia played an important role. Tigranes understood that to succeed he needed not only military skill but also diplomatic flexibility. He established contacts with neighboring states, including Pontus, where his future ally Mithridates VI Eupator ruled, and began to prepare the ground for future conquests.
        </p>
        <ImgBlock img='/images/mitr.png' caption='Mithridates VI Eupator' />
        <p className={storyStyles.text}>
          By the time Tigran was ready to ascend the throne, he was no longer just an heir to the throne, but an experienced politician and strategist. His captivity in Parthia, which might have been the end of a career for a less determined man, became a school of life and a source of inspiration for him. Tigran knew that he would have a difficult path, but he was ready for the challenges.
        </p>
      </div>
      <div className={storyStyles.outerDivider}></div>
    </div>
  );
};

export default FirstStory;