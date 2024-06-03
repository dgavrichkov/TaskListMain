import cn from 'classnames';
import styles from './MasonryDemo.module.css';

export const MasonryDemo = () => {
  return (
    <div>
      <h1 className={styles.title}>Masonry</h1>
      <div className={cn(styles.container, styles.threeColumns)}>
        <div className={styles.item} style={{height: 120}}><span>1</span></div>
        <div className={styles.item} style={{height: 200}}><span>2</span></div>
        <div className={styles.item} style={{height: 150}}><span>3</span></div>
        <div className={styles.item} style={{height: 100}}><span>4</span></div>
        <div className={styles.item} style={{height: 110}}><span>5</span></div>
        <div className={styles.item} style={{height: 120}}><span>6</span></div>
        <div className={styles.item} style={{height: 100}}><span>7</span></div>
        <div className={styles.item} style={{height: 200}}><span>8</span></div>
        <div className={styles.item} style={{height: 110}}><span>9</span></div>
      </div>
      <section className={cn(styles.container, styles.fiveColumns)}>
        <div className={styles.item} style={{height: 120}}><span>1</span></div>
        <div className={styles.item} style={{height: 200}}><span>2</span></div>
        <div className={styles.item} style={{height: 150}}><span>3</span></div>
        <div className={styles.item} style={{height: 90}}><span>4</span></div>
        <div className={styles.item} style={{height: 110}}><span>5</span></div>
        <div className={styles.item} style={{height: 120}}><span>6</span></div>
        <div className={styles.item} style={{height: 100}}><span>7</span></div>
        <div className={styles.item} style={{height: 200}}><span>8</span></div>
        <div className={styles.item} style={{height: 110}}><span>9</span></div>
        <div className={styles.item} style={{height: 100}}><span>10</span></div>
        <div className={styles.item} style={{height: 200}}><span>11</span></div>
        <div className={styles.item} style={{height: 110}}><span>12</span></div>
        <div className={styles.item} style={{height: 110}}><span>13</span></div>
        <div className={styles.item} style={{height: 240}}><span>14</span></div>
        <div className={styles.item} style={{height: 200}}><span>15</span></div>
        <div className={cn(styles.item, styles.break)}></div>
        <div className={cn(styles.item, styles.break)}></div>
        <div className={cn(styles.item, styles.break)}></div>
        <div className={cn(styles.item, styles.break)}></div>
      </section>
    </div>
  )
};
