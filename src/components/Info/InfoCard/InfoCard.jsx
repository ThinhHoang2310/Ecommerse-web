import styles from '../styles.module.scss';

function InfoCard({ content, description, src }) {
  const { containerCard, containerContent, title, desctitle } = styles;

  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt="TruckIcon" />

      <div className={containerContent}>
        <div className={title}>{content}</div>
        <div className={desctitle}>{description}</div>
      </div>
    </div>
  );
}

export default InfoCard;
