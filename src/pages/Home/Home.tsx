import { useEffect, useState } from 'react';
import { fetchProjects } from '../../api/projects';
import { Project } from '../../types/Project';

export const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div></div>
  );
};
