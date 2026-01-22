import { ProjectCard } from '../FeaturedProjects/ProjectCard';
import styles from './ProjectsList.module.scss';
import arrowImg from '../../imgs/Chevron.svg';
import { scrollToTop } from '../../hooks/scrollToTop';
import { useLanguage } from '../../context/LanguageContext';
import { Project } from '../../types/Project';
const ITEMS_PER_PAGE = 6;

interface ProjectsListProps {
  projects: Project[];
  currentPage: number;
  setCurrentPage: (v: number) => void;
}

export const ProjectsList = ({ projects, currentPage, setCurrentPage }: ProjectsListProps) => {
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const { t } = useLanguage();

  const showTitle = `${t('showing')} ${projects.length} ${t('projectsSmall')}`;

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    scrollToTop();
  };

  return (
    <div className={styles.container}>
      <div className={`textSecondary ${styles.title}`}>{showTitle}</div>
      <div className={styles.projects}>
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className={styles.pagination}>
        <button className={styles.arrow} onClick={() => changePage(currentPage - 1)}>
          <img style={{ transform: 'rotate(180deg)' }} src={arrowImg} alt="Arrow pagination" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              className={`textBody ${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          );
        })}

        <button className={styles.arrow} onClick={() => changePage(currentPage + 1)}>
          <img src={arrowImg} alt="Arrow pagination" />
        </button>
      </div>
    </div>
  );
};
