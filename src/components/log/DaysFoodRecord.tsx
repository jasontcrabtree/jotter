// An indiviudal food record
// Quantity
// Meal time
// Optional photo
// Date*

import Link from 'next/link';

import styles from './log-css-modules/DaysFoodRecord.module.css';
import Heading from '../elements/Heading/Heading';

type DaysFoodRecordProps = {
  date: Date;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function DaysFoodRecord({ date }: DaysFoodRecordProps): JSX.Element {
  console.log(typeof date);

  return (
    <div className={styles.card}>
      <Link href="/record/today" passHref>
        <a href="replace">Detailed View</a>
      </Link>

      <p>{date.toDateString()}</p>
      <Heading size="h3" text="Consolidated Record Item - Single Date" />
      <p>Summary of meals eaten across a single day</p>
      <Heading size="h4" text="Meals" />
      <ul className={styles.mealsGrid}>
        <li className={styles.mealsGridItem}>Coffee</li>
        <li className={styles.mealsGridItem}>4PM</li>
        <li className={styles.mealsGridItem}>Dinner</li>
        <li className={styles.mealsGridItem}>After Dinner</li>
        <li className={styles.mealsGridItem}>Snacks</li>
      </ul>
    </div>
  );
}
export default DaysFoodRecord;
