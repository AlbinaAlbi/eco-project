import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProjects } from '../../api/projects';
import { setProjects } from '../../store/slices/ProjectsSlice/projectsSlice';

export const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.projects.projects);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      const dataWithStringId = data.map((p) => ({ ...p, id: p.id.toString() }));

      dispatch(setProjects(dataWithStringId));
    };

    loadProjects();
  }, [dispatch]);

  console.log(projects);
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};
