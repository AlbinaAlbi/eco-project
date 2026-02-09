import { ErrorElement } from '../../components/ErrorElement';
import { Loader } from '../../components/Loader';
import { useAppSelector } from '../../hooks/hooks';
import { useQuestionCommomList } from '../../hooks/useQuestionCommomList';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { FAQ } from '../HomePage/FAQ';
import styles from './HelpNow.module.scss';
import { RequestSupport } from '../../components/RequestSupport';
import { StartYourProject } from '../../components/StartYourProject';
import { Support } from '../../components/Support';
import { useRequestList } from '../../hooks/useRequestList';
import { TransparentProcess } from '../../components/TransparentProcess';
import beautiful from '../../imgs/beautiful.jpg';

export const HelpNow = () => {
  const questionList = useQuestionCommomList();
  const { loading, error } = useAppSelector((state) => state.projects);
  const requestList = useRequestList();

  if (loading) return <Loader />;
  if (error) return <ErrorElement message={error} />;

  return (
    <div className={styles.container}>
      <StartYourProject />
      <div className={styles.transparent}>
        <TransparentProcess />
      </div>
      <Support />
      <RequestSupport requestList={requestList} section={'request'} />
      <div className="containerMaxWidth containerContentPadding">
        <div className={styles.columnWrapper}>
          <FAQ
            questionList={questionList}
            tagKey={SECTION_HEADERS.faq.tagKey}
            titleKey={SECTION_HEADERS.faq.titleKey}
            tagColor={SECTION_HEADERS.faq.tagColor}
            titleColor={SECTION_HEADERS.faq.titleColor}
            image={beautiful}
          />
        </div>
      </div>
    </div>
  );
};
