import { SwiperClass } from 'swiper/react';
import styles from './PaginationElement.module.scss';

interface PaginationElementProps {
  swiperRef: React.RefObject<SwiperClass | null>;
  paginationCount: number;
  projectsLength: number;
  activeIndex: number;
}

export const PaginationElement = ({
  swiperRef,
  paginationCount,
  projectsLength,
  activeIndex,
}: PaginationElementProps) => {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: paginationCount }).map((_, i) => {
        const isLastDot = i === paginationCount - 1 && projectsLength > 3;
        const isActive = isLastDot ? activeIndex >= i : activeIndex === i;

        return (
          <span
            key={i}
            className={isActive ? styles.active : ''}
            onClick={() => swiperRef.current?.slideToLoop(i)}
          />
        );
      })}
    </div>
  );
};
