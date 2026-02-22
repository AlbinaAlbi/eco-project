import styles from './QuestionElement.module.scss';
import arrow from '../../../../imgs/Arrow.svg';
import { useRenderText } from '../../../../hooks/useRenderText';

interface QuestionElementProps {
  question: {
    id: number;
    questionKey: string | string[];
    answerKey: string | string[];
  };
  isOpen: boolean;
  toggleOpen: () => void;
}

export const QuestionElement = ({ question, isOpen, toggleOpen }: QuestionElementProps) => {
  const { questionKey, answerKey } = question;
  const { renderText } = useRenderText();

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ''}`} onClick={toggleOpen}>
      <div className={`${styles.arrow} ${isOpen ? styles.openArrow : ''}`}>
        <img src={arrow} alt="Question arrow" />
      </div>
      <h4>{renderText(questionKey)}</h4>
      <div className={`textBody ${styles.answerText} ${isOpen ? styles.openAnswer : ''}`}>
        {renderText(answerKey)}
      </div>
    </div>
  );
};
