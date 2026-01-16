import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ExploreCarousel.module.scss';
import { SWIPER_IMAGES } from '../../../locales/images';
import { Image } from '../../Image';

export const ExploreCarousel = () => {
  const images = [...SWIPER_IMAGES, ...SWIPER_IMAGES, ...SWIPER_IMAGES];

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Autoplay]}
        centeredSlides
        loop={true}
        spaceBetween={16}
        slidesPerView="auto"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={5000}
        breakpoints={{
          640: { spaceBetween: 16 },
          1024: { spaceBetween: 24 },
          1440: { spaceBetween: 32 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Image img={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
