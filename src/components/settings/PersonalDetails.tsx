// Personal info (name, weight, age, picture)

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function PersonalDetails(props: Props): JSX.Element {
  console.log(props);

  return (
    <>
      <h2>Personal Details</h2>
      <p>Hello</p>
    </>
  );
}
export default PersonalDetails;
