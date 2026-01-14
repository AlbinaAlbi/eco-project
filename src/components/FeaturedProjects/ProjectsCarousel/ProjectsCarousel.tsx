import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperClass } from 'swiper/types';

import styles from './ProjectsCarousel.module.scss';
import { ProjectCard } from '../ProjectCard';
import { useEffect, useRef, useState } from 'react';
import { fetchProjects } from '../../../api/projects';
import { Project } from '../../../types/Project';
import { CarouselElement } from './CarouselElement';
import { useDeviceType } from '../../../hooks/getDeviceType';

export const ProjectsCarousel = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const paginationCount = Math.min(projects.length, 4);
  const device = useDeviceType();
  const singleSlide = projects.length === 1;

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
  if (!projects.length) return <p>No projects found</p>;

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
        onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.realIndex)}
        loop={!singleSlide}
        grabCursor={!singleSlide}
        centeredSlides={singleSlide}
        autoplay={!singleSlide ? { delay: 3000, disableOnInteraction: false } : false} // отключаем autoplay
        navigation={!singleSlide}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className={styles.slide}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {device === 'mobile' && (
        <CarouselElement
          swiperRef={swiperRef}
          paginationCount={paginationCount}
          projectsLength={projects.length}
          activeIndex={activeIndex}
        />
      )}
    </div>
  );
};
