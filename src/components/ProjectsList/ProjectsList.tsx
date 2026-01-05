import React, { useEffect, useState } from 'react';
import { Project } from '../../types/Project';
import { fetchProjects } from '../../api/projects';

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch {
        setError('Не вдалося завантажити проекти');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <div>Завантаження...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {projects.map((p) => (
        <li key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.shortDescription}</p>
          <p>{p.city}</p>
          <p>
            {p.currentAmount} / {p.goalAmount} грн
          </p>
          <p>Status: {p.status}</p>
          {p.imageUrl && <img src={p.imageUrl} alt={p.title} width={200} />}
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
