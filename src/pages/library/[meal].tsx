// An indiviudal food record
// Quantity
// Meal time
// Optional photo
// Date*

import Heading from '../../components/elements/Heading/Heading';
import MealRecord from '../../components/log/MealRecord';
import styles from '../../styles/page-css-modules/recordpage.module.css';

type DynamicFoodRecordProps = {
  date?: Date;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function DynamicFoodRecord({ date }: DynamicFoodRecordProps): JSX.Element {
  console.log(typeof date);

  return (
    <div className={styles.recordPage}>
      <Heading size="h3" text="Full View Single Day" />
      <p>All meals in a single day</p>
      <MealRecord
        mealName="Oats & Avocado"
        calories={450}
        carbs={65}
        fat={25}
        protein={20}
        portionSize={100}
        mealTime="Lunch"
        date={(date = new Date())}
        photoAlt="Avocado on toast"
        photo="https://images.unsplash.com/photo-1507757861675-f14524bb197d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=555&q=80"
      />
      <MealRecord mealName="Chicken Salad" photoAlt="Chicken salad" />
      <MealRecord
        mealName="Hubbard Granola & Greek Yoghurt"
        photoAlt="Granola & Yoghurt"
      />
    </div>
  );
}
export default DynamicFoodRecord;
