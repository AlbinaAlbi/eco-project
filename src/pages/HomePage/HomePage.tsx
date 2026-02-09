import { FeaturedProjects } from '../../components/FeaturedProjects';
import { HowItWorks } from './HowItWorks';
import { Mission } from './Mission';
import { OurStatistics } from '../../components/OurStatistics';
import { TakeAction } from './TakeAction';
import styles from './HomePage.module.scss';
import { FAQ } from './FAQ';
import { StartInitiative } from '../../components/StartInitiative';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProjectsThunk } from '../../store/slices/ProjectsSlice/projectsSlice';
import { useEffect } from 'react';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { useQuestion } from '../../hooks/useQuestion';
import { Loader } from '../../components/Loader';
import { ErrorElement } from '../../components/ErrorElement';
import FAQImg from '../../imgs/FAQImg.png';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { projects, loading, error } = useAppSelector((state) => state.projects);
  const questionList = useQuestion();

  useEffect(() => {
    dispatch(fetchProjectsThunk());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <ErrorElement message={error} />;

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className="containerMaxWidth containerContentPadding">
          <div className={styles.columnWrapper}>
            <TakeAction />
            <Mission />
          </div>
        </div>
      </section>

      <section className={styles.gray}>
        <HowItWorks />
      </section>

      <section className={styles.section}>
        <div className="containerMaxWidth containerContentPadding">
          <div className={styles.columnWrapper}>
            <FeaturedProjects projects={projects} />
          </div>
        </div>
      </section>

      <section className={styles.gray}>
        <OurStatistics />
      </section>

      <section className={styles.section}>
        <div className="containerMaxWidth containerContentPadding">
          <div className={styles.columnWrapper}>
            <FAQ
              questionList={questionList}
              tagKey={SECTION_HEADERS.faq.tagKey}
              titleKey={SECTION_HEADERS.faq.titleKey}
              tagColor={SECTION_HEADERS.faq.tagColor}
              titleColor={SECTION_HEADERS.faq.titleColor}
              image={FAQImg}
            />
          </div>
        </div>
      </section>

      <StartInitiative />
    </div>
  );
};
