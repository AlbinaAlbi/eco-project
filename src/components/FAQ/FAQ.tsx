import styles from './FAQ.module.scss';
import FAQImg from '../../imgs/FAQImg.png';
import { Image } from '../Image';
import { TagAndTitle } from '../TagAndTitle';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { useSectionHeader } from '../../hooks/useSectionHeader';
import { QuestionElement } from './QuestionElement';
import { useQuestion } from '../../hooks/useQuestion';
import { useState } from 'react';

export const FAQ = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.faq;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });
  const questionList = useQuestion();

  const [openQuestionId, setOpenQuestionId] = useState(questionList[0]?.id || null);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.container} id="faq">
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />

      <div className={styles.questionsAndImg}>
        <div className={styles.questionsList}>
          {questionList.map((question) => (
            <QuestionElement
              key={question.id}
              question={question}
              isOpen={openQuestionId === question.id}
              toggleOpen={() => toggleQuestion(question.id)}
            />
          ))}
        </div>
        <div className={styles.image}>
          <Image img={FAQImg} alt={'FAQ Img'} />
        </div>
      </div>
    </div>
  );
};
