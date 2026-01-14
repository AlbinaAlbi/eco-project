import { useEffect, useState } from 'react';
import { FeaturedProjects } from '../../components/FeaturedProjects';
import { HowItWorks } from '../../components/HowItWorks';
import { Mission } from '../../components/Mission';
import { OurStatistics } from '../../components/OurStatistics';
import { TakeAction } from '../../components/TakeAction';
import styles from './HomePage.module.scss';
import { fetchProjects } from '../../api/projects';
import { Project } from '../../types/Project';
import { FAQ } from '../../components/FAQ';

export const HomePage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div className={styles.container}>
      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <TakeAction />
        <Mission />
      </div>
      <HowItWorks />
      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <FeaturedProjects projects={projects} />
      </div>
      <OurStatistics projectsLength={projects.length} />

      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <FAQ />
      </div>
      
    </div>
  );
};
