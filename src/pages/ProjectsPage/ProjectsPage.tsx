import { ExploreProjects } from '../../components/ExploreProjects';
import { useAppSelector } from '../../hooks/hooks';

export const ProjectsPage = () => {
  const { projects } = useAppSelector((state) => state.projects);

  return (
    <div>
      <ExploreProjects />
    </div>
  );
};
