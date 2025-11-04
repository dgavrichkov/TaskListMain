import { Play } from 'lucide-react';
import styles from './MinutesTimer.module.scss';
import { Button } from '@/shared/ui';

/** просто отображение минут и секунд, интерфейс для показа обратного отсчета */
export const MinutesTimer = () => {
  const handleOnSubmit = () => {
    // app.submit(event);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.timer} onSubmit={handleOnSubmit}>
        <div className={styles.info}>
          Установить медитацию на
          <input aria-label="Число минут для медитации" name="time" type="number" value="10" />
          минут
        </div>
        <div className={styles.countdown}>
          <div className={styles.num} id="min_tens">
            0
          </div>
          <div className={styles.num} id="min">
            0
          </div>
          <div className={styles.dots}>:</div>
          <div className={styles.num} id="sec_tens">
            0
          </div>
          <div className={styles.num} id="sec">
            0
          </div>
        </div>
        <Button type="button">
          {/* <img alt="Иконка play" src="./images/play.svg" /> */}
          <Play />
          Запустить таймер
        </Button>
      </form>
    </div>
  );
};
