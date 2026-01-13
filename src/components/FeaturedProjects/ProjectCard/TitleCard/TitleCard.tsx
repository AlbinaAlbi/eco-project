import styles from './TitleCard.module.scss';

interface TitleCardProps {
  titleText: string;
}

export const TitleCard = ({ titleText }: TitleCardProps) => {
  return <h4 className={styles.title}>{titleText}</h4>;
};
