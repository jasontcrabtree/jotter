// A list of all food records

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
export default function Records(props: Props): JSX.Element {
  console.log(props);

  return <div>Hello! {props ? <div>Props</div> : <div>No props</div>}</div>;
}
