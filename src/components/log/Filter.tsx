// Change how food records render

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function Filter(props: Props): JSX.Element {
  console.log(props);

  return <div>Hello! {props ? <div>Props</div> : <div>No props</div>}</div>;
}
export default Filter;
