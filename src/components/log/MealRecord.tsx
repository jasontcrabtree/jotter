// An indiviudal food record
// Quantity
// Meal time
// Optional photo
// Date*

import Heading from '../elements/Heading/Heading';
import styles from './log-css-modules/MealRecord.module.css';

type MealRecordProps = {
  date?: Date;
  mealName?: string;
  mealTime?: string;
  photo?: string;
  photoAlt: string;
  portionSize?: number;
  calories?: number;
  carbs?: number;
  protein?: number;
  fat?: number;
};

const today = new Date();
const defaultImage =
  'https://images.unsplash.com/photo-1590954975501-e3d99ae251d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80';

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function MealRecord({
  date = today,
  mealName = 'Fries & Mayo',
  mealTime,
  photo = defaultImage,
  photoAlt,
  portionSize,
  calories,
  carbs,
  protein,
  fat,
}: MealRecordProps): JSX.Element {
  return (
    <div className={styles.mealCard}>
      <img src={photo} alt={photoAlt} className={styles.mealPhoto} />
      <section className={styles.mealInfo}>
        <Heading size="h3" text={mealName} />
        {date && mealTime ? (
          <div>
            <p>
              A {mealTime} time meal on{' '}
              <span className="text-med">{date.toLocaleString()}</span>
            </p>
          </div>
        ) : (
          <div>
            <p>No time of day or date for entry</p>
          </div>
        )}
        {calories ? (
          <div>
            <p>
              The full meal was:{' '}
              <span className="text-med">{calories}calories</span>
            </p>
          </div>
        ) : (
          <div>
            <p>No calories recorded on saved meal</p>
          </div>
        )}
        {portionSize ? (
          <div>
            <p>
              The portion size:{' '}
              <span className="text-med">{portionSize}(G)</span>.
              <details className={styles.portionInfo}>
                <summary>Portion of Ingredients</summary>
                Portion measures the main macro contributor of the meal, or the
                main variable weight of the meal. E.g. Oats crackers is
                consistent, avocado is variable, etc.
              </details>
            </p>
          </div>
        ) : (
          <div>
            <p>No portion size recorded on saved meal</p>
          </div>
        )}
        {protein ? (
          <div>
            <p>
              The meal had <span className="text-med">{protein} grams</span> of
              protein
            </p>
          </div>
        ) : (
          <div>
            <p>No protein information recorded on saved meal</p>
          </div>
        )}
        {carbs ? (
          <div>
            <p>
              The meal had <span className="text-med">{carbs} grams </span> of
              carbs
            </p>
          </div>
        ) : (
          <div>
            <p>No carb information recorded on saved meal</p>
          </div>
        )}
        {fat ? (
          <div>
            <p>
              The meal had <span className="text-med">{fat} grams</span> of fat
            </p>
          </div>
        ) : (
          <div>
            <p>No fat information recorded on saved meal</p>
          </div>
        )}
      </section>
    </div>
  );
}
export default MealRecord;
