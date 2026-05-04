import styles from './FAQ.module.scss';
import { Image } from '../../../components/Image';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { QuestionElement } from './QuestionElement';
import { useState } from 'react';
import { TranslationKey } from '../../../context/LanguageContext';
import { useQuestionProps } from '../../../hooks/useQuestion';

interface FAQProps {
  questionList: useQuestionProps[];
  tagKey: TranslationKey;
  titleKey: TranslationKey;
  tagColor: string;
  titleColor: string;
  image: string;
}

export const FAQ = ({ questionList, tagKey, titleKey, tagColor, titleColor, image }: FAQProps) => {
  const { tag, title } = useSectionHeader({
    tagKey: tagKey ?? null,
    titleKey: titleKey ?? null,
  });

  const [openQuestionId, setOpenQuestionId] = useState(questionList[0]?.id || null);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.container} id="faq">
      <div className="wrapperTextAlign">
        <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
      </div>

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
          <Image img={image} alt={'FAQ Img'} />
        </div>
      </div>
    </div>
  );
};
