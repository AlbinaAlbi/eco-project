import styles from './Image.module.scss';

interface ImageProps {
  img: string;
  alt?: string;
}

export const Image = ({ img, alt = '' }: ImageProps) => {
  return <img src={img} alt={alt} className={styles.image} />;
};
