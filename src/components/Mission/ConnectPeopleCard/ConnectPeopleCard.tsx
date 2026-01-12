import styles from './ConnectPeopleCard.module.scss';

export const ConnectPeopleCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>Connect people with eco-initiatives</h4>
        <div className="textBody">
          We help communities find and join local environmental projects — from tree planting to
          clean-up events
        </div>
      </div>
    </div>
  );
};
