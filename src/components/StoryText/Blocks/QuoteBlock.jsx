import storyStyles from '../StoryText.module.scss';

const QuoteBlock = ({quote, cite}) => {
  return (
    <blockquote className={storyStyles.text}>
        <img src="/images/quote.png" alt="Quote" />
        &laquo;{quote}&raquo;
        <cite>© {cite} </cite>
    </blockquote>
  );
};

export default QuoteBlock;