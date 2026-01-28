import { Description } from '../../../components/Description';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { Project } from '../../../types/Project';
import styles from './HeaderProject.module.scss';

interface HeaderProjectProps {
  project: Project;
}

export const HeaderProject = ({ project }: HeaderProjectProps) => {
  return (
    <div className={styles.container}>
      <TagAndTitle
        tag={project.category}
        title={project.title}
        tagColor={'#EDEEEE'}
        titleColor={'#121212'}
      />
      <Description title={project.shortDescription} />
    </div>
  );
};
