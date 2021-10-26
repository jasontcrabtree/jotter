// Add a new meal to the meal library

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function AddMeal(props: Props): JSX.Element {
  console.log(props);

  return <div>Hello! {props ? <div>Props</div> : <div>No props</div>}</div>;
}
export default AddMeal;
