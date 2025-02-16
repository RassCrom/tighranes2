import storyStyles from '../../StoryText.module.scss'
import StoryHeading from '../../StoryHeading/StoryHeading';
import ImgBlock from '../../Blocks/ImgBlock';
import QuoteBlock from '../../Blocks/QuoteBlock';

const ThirdStory = () => {
  return (
    <div className={storyStyles.storyOuter}>
      <StoryHeading 
        number='III'
        subhead='Nemesis — Parthia'
        caption=''
      />
      <div className={storyStyles.storyText}>
        <p className={storyStyles.text}>
            In 91–90 BCE, Tigran II launched a war against Parthia, breaking his alliance with King Mithridates II. The conflict arose after Parthia's rapprochement with Rome, with whom Tigran was at war over Cappadocia. During negotiations in 92 BCE, the Parthians offered an alliance to Rome, dealing a blow to Armenian-Parthian relations. Seizing the opportunity, Tigran reclaimed the 70 valleys previously ceded to the Parthians and launched a large-scale offensive. He captured key regions, including Atropatene, Adiabene, and Upper Mesopotamia, devastated the lands around Nineveh and Arbela, and then took Ecbatana—the summer capital of Parthia. These victories allowed Tigran to assume the title of "King of Kings," previously held by Mithridates II.
        </p>
        <QuoteBlock
          quote='Tigranes not only took away 70 valleys from the Parthians but also devastated their own country—the regions around Ninus and Arbela.'
          cite='Strabo'
        />
        <p className={storyStyles.text}>
            Mithridates' successor, Gotarzes I, relinquished the title in favor of Tigran, acknowledging his supremacy. The Parthians ceded Mesopotamia to Armenia, and nomadic Arab tribes and Saka-Massagetae leaders near the Aral Sea recognized Tigran's authority. Even decades later, during the arbitration of the Roman general Pompey, the title of "King of Kings" remained with Tigran, underscoring his regional influence. These triumphs solidified Armenia as the dominant power in Western Asia.
        </p>
        <ImgBlock img='/images/mithridates-2.png' caption='Mithridates II' />
        <p className={storyStyles.text}>
            The final chapter in Tigran's series of victories came in 67 BCE, when he defeated a Parthian army that had invaded Armenia to support a rebellious prince. The Armenian forces routed the enemy, cementing Tigran's supremacy. These events not only expanded the borders of the Armenian Kingdom but also established it as one of the leading powers of its time.
        </p>
      </div>
      <div className={storyStyles.outerDivider}></div>
    </div>
  );
};

export default ThirdStory;