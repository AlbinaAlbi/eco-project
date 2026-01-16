import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperClass } from 'swiper/types';

import styles from './ExploreCarousel.module.scss';
import { useRef, useState } from 'react';
import { SWIPER_IMAGES } from '../../../locales/images';
import { Image } from '../../Image';

export const ExploreCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        centeredSlides
        spaceBetween={20}
        loop
        loopAdditionalSlides={5}
        grabCursor
        observer
        observeParents
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {SWIPER_IMAGES.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Image img={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
