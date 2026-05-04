import { useLanguage } from '../../../../context/LanguageContext';
import styles from './ProgressBar.module.scss';
import { ProgressLine } from './ProgressLine';

interface ProgressBarProps {
  goalAmount: number;
  currentAmount: number;
}

export const ProgressBar = ({ goalAmount, currentAmount }: ProgressBarProps) => {
  const formatNumber = (value: number) => new Intl.NumberFormat('uk-UA').format(value);
  const percentage = Math.floor((currentAmount / goalAmount) * 100);
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <ProgressLine percentage={percentage} />

      <div className={styles.raisedAndGoal}>
        <div className={styles.raised}>
          <span className="textSecondary">{t('raised')}</span>
          <h5>{formatNumber(currentAmount)} ₴</h5>
        </div>

        <div className={styles.goal}>
          <span className="textSecondary">{t('goal')}</span>
          <h5>{formatNumber(goalAmount)} ₴</h5>
        </div>
      </div>
    </div>
  );
};
