import storyStyles from '../../StoryText.module.scss'
import StoryHeading from '../../StoryHeading/StoryHeading';
import ImgBlock from '../../Blocks/ImgBlock';
import QuoteBlock from '../../Blocks/QuoteBlock';

const SecondStory = ({ref}) => {
  return (
    <div className={storyStyles.storyOuter} ref={ref}>
      <StoryHeading 
        number='II'
        subhead='First campaign at Cappadocia'
        caption=''
      />
      <div className={storyStyles.storyText}>
        <p className={storyStyles.text}>
            The war with Cappadocia began in 93 BCE when the Cappadocian king Ariobarzanes I, facing an Armenian threat, fled to Rome. Tigran II, seizing the opportunity, installed his puppet ruler, Gordias, on the Cappadocian throne. This move not only strengthened Armenia's influence in the region but also led to the first major confrontation with the Roman Republic. As a result of the war, the strategically important region of Malatya was annexed to Armenia, marking a significant achievement for Tigran.
        </p>
        <ImgBlock img='/images/ariobarzanes-I.png' caption="Ariobarzanes I" />
        <p className={storyStyles.text}>
            However, the Romans did not remain idle. In 92 BCE, the Roman general Lucius Cornelius Sulla intervened in the conflict. He expelled the Armenian forces led by commanders Bagoyas and Mithrias from Cappadocia and restored Ariobarzanes I to the throne. Despite this setback, Tigran did not abandon his ambitions. Between 93 and 91 BCE, he invaded Cappadocia three times, attempting either to install his puppet ruler or to plunder the country and weaken it.
        </p>
        <ImgBlock img='/images/sulla.png' caption='Copernicus Sulla' />
        <p className={storyStyles.text}>
            Interestingly, in 92 BCE, the Parthians, previously allies of Armenia, unexpectedly sided with Rome. The historian Plutarch describes a significant meeting between Sulla and the Parthian envoy Orobazus, attended by the exiled Ariobarzanes I. During the negotiations, Sulla, Ariobarzanes, and Orobazus sat on three chairs, symbolizing an alliance between Rome, Cappadocia, and Parthia. This alliance was a pivotal moment in ancient history, as it marked the first time Romans and Parthians united against a common enemy—Armenia.
        </p>
        <QuoteBlock 
          quote='Sulla placed three chairs - one for Ariobarzanus, one for Orobazus, and one for himself - and sat in the middle during the negotiations'
          cite='Plutarch'
        />
      </div>
      <div className={storyStyles.outerDivider}></div>
    </div>
  );
};

export default SecondStory;