import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountDownBanner() {
  const targetDate = '2025-12-31T23:59:59'; // Example target date

  const { container, containerTimer, title, boxBtn } = styles;
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The Classic make a Comeback</p>
      <div className={boxBtn}>
        <Button content={'Buy now'} />
      </div>
    </div>
  );
}

export default CountDownBanner;
