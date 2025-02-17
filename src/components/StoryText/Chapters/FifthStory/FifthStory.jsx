import storyStyles from '../../StoryText.module.scss'
import StoryHeading from '../../StoryHeading/StoryHeading';
import ImgBlock from '../../Blocks/ImgBlock';
import QuoteBlock from '../../Blocks/QuoteBlock';

const FifthStory = ({ref}) => {
  return (
    <div className={storyStyles.storyOuter} ref={ref}>
      <StoryHeading 
        number='V'
        subhead='Second campaign at Cappadocia'
        caption=''
      />
      <div className={storyStyles.storyText}>
        <p className={storyStyles.text}>
          Nearly two decades after his first Cappadocian campaign in the 90s BCE, Tigran II launched another invasion of pro-Roman Cappadocia in 77 BCE. During this campaign, he deported around 300,000 people from the region, resettling them near the construction site of the new capital of the Armenian Empire — the city of Tigranakert. Many of these Cappadocians, forcibly relocated to Armenia, became a significant part of the new capital's population and were never able to return to their homeland. This campaign not only strengthened Armenia but also aided Tigran's ally, Mithridates of Pontus, by delaying another Roman offensive against Pontus. The historian Appian notes that the invasion of Cappadocia was carried out at the request of Mithridates, who persuaded his son-in-law Tigran to act as if on his own initiative. 
        </p>
        <QuoteBlock
          quote='Mithridates persuaded his son-in-law Tigran to attack Cappadocia as if on his own initiative. The Armenian king, having subjugated Cappadocia, took up to 300,000 people to Armenia and settled them, along with others, in the place where he first assumed the crown of Armenia and which he named Tigranocerta after himself'
          cite='Appian '
        />
        <p className={storyStyles.text}>
            Thus, Tigranakert became not only a symbol of the Armenian Empire's might but also a place where the fates of thousands of people, forcibly displaced during Tigran II's ambitious conquests, intersected.
        </p>
      </div>
      <div className={storyStyles.outerDivider}></div>
    </div>
  );
};

export default FifthStory;