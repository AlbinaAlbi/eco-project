import styles from './CarouselElement.module.scss';
import Chevron from '../../../../imgs/Chevron.svg';
import { PaginationElement } from '../PaginationElement';
import { SwiperClass } from 'swiper/react';

interface PaginationElementProps {
  swiperRef: React.RefObject<SwiperClass | null>;
  paginationCount: number;
  projectsLength: number;
  activeIndex: number;
}

export const CarouselElement = ({
  swiperRef,
  paginationCount,
  projectsLength,
  activeIndex,
}: PaginationElementProps) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.navPrev} onClick={() => swiperRef.current?.slidePrev()}>
        <img src={Chevron} alt="Chevron left" />
      </div>
      <PaginationElement
        swiperRef={swiperRef}
        paginationCount={paginationCount}
        projectsLength={projectsLength}
        activeIndex={activeIndex}
      />
      <div className={styles.navNext} onClick={() => swiperRef.current?.slideNext()}>
        <img src={Chevron} alt="Chevron right" />
      </div>
    </div>
  );
};
