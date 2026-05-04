import { ErrorElement } from '../../components/ErrorElement';
import { Loader } from '../../components/Loader';
import { RequestSupport } from '../../components/RequestSupport';
import { useAppSelector } from '../../hooks/hooks';
import { useRequestShouldInclude } from '../../hooks/useRequestShouldInclude';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { FAQ } from '../HomePage/FAQ';
import styles from './BecomeAVolunteer.module.scss';
import { TransparentProcess } from '../../components/TransparentProcess';
import { VolunteerHeader } from '../../components/VolunteerHeader';
import { useQuestionsVolunteeringList } from '../../hooks/useQuestionsVolunteeringList';
import FAQImg from '../../imgs/nature.jpg';
import { useBecomeVolunteer } from '../../hooks/useBecomeVolunteer';

export const BecomeAVolunteer = () => {
  const questionList = useQuestionsVolunteeringList();
  const { loading, error } = useAppSelector((state) => state.projects);
  const requestList = useRequestShouldInclude();
  const stepsList = useBecomeVolunteer();

  if (loading) return <Loader />;
  if (error) return <ErrorElement />;

  return (
    <div className={styles.container}>
      <VolunteerHeader />
      <div className={styles.transparent}>
        <TransparentProcess stepsList={stepsList} />
      </div>
      <RequestSupport requestList={requestList} />
      <div className="containerMaxWidth containerContentPadding">
        <div className={styles.columnWrapper}>
          <FAQ
            questionList={questionList}
            tagKey={SECTION_HEADERS.questionsVolunteering.tagKey}
            titleKey={SECTION_HEADERS.questionsVolunteering.titleKey}
            tagColor={SECTION_HEADERS.questionsVolunteering.tagColor}
            titleColor={SECTION_HEADERS.questionsVolunteering.titleColor}
            image={FAQImg}
          />
        </div>
      </div>
    </div>
  );
};
