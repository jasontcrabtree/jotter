// Current goals, past goals, goal progress, goal tracking

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function Goals(props: Props): JSX.Element {
  console.log(props);

  return (
    <>
      <h2>Goals</h2>
      <div>My goals</div>
    </>
  );
}
export default Goals;
