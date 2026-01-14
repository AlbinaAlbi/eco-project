import { useRenderText } from '../../hooks/renderText';
import styles from './Description.module.scss';

interface DescriptionProps {
  title: string[] | string;
}

export const Description = ({ title }: DescriptionProps) => {
  const { renderText } = useRenderText();

  return <div className={`textBody ${styles.container}`}>{renderText(title)}</div>;
};
