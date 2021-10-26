// An indiviudal food record
// Quantity
// Meal time
// Optional photo
// Date*

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function FoodRecord(props: Props): JSX.Element {
  console.log(props);

  return <div>Hello! {props ? <div>Props</div> : <div>No props</div>}</div>;
}
export default FoodRecord;
