import styles from './FAQ.module.scss';
import FAQImg from '../../imgs/FAQImg.png';
import { Image } from '../Image';
import { TagAndTitle } from '../TagAndTitle';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { useSectionHeader } from '../../hooks/useSectionHeader';
import { QuestionElement } from './QuestionElement';
import { useQuestion } from '../../hooks/useQuestion';

export const FAQ = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.faq;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });
  const questionList = useQuestion();

  return (
    <div className={styles.container}>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />

      <div className={styles.questionsAndImg}>
        <div className={styles.questionsList}>
          {questionList.map((question) => (
            <QuestionElement key={question.id} question={question} />
          ))}
        </div>
        <div className={styles.image}>
          <Image img={FAQImg} alt={'FAQ Img'} />
        </div>
      </div>
    </div>
  );
};
