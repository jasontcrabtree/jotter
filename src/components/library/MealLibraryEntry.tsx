// An individual meal
// Comprised of calories, macros (protein, fat, carbs)
// Ingredients
// Portion size
// Photos

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function MealLibraryEntry(props: Props): JSX.Element {
  console.log(props);

  return <div>Hello! {props ? <div>Props</div> : <div>No props</div>}</div>;
}
export default MealLibraryEntry;
