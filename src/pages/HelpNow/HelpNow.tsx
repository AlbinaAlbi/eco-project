import { useQuestionCommomList } from '../../hooks/useQuestionCommomList';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { FAQ } from '../HomePage/FAQ';
import styles from './HelpNow.module.scss';
import { RequestSupport } from './RequestSupport';
import { StartYourProject } from './StartYourProject';
import { Support } from './Support';
import { TransparentProcess } from './TransparentProcess';

export const HelpNow = () => {
  const questionList = useQuestionCommomList();

  return (
    <div className={styles.container}>
      <StartYourProject />
      <div className={styles.transparent}>
        <TransparentProcess />
      </div>
      <Support />
      <RequestSupport />
      <div className="containerMaxWidth containerContentPadding">
        <div className={styles.columnWrapper}>
          <FAQ
            questionList={questionList}
            tagKey={SECTION_HEADERS.faq.tagKey}
            titleKey={SECTION_HEADERS.faq.titleKey}
            tagColor={SECTION_HEADERS.faq.tagColor}
            titleColor={SECTION_HEADERS.faq.titleColor}
          />
        </div>
      </div>
    </div>
  );
};
