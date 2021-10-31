import Heading from '../elements/Heading/Heading';
import MealLibrary from './MealLibrary';

type Props = {
  props?: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
export default function Library(props: Props): JSX.Element {
  // console.log(props);

  return (
    <>
      <Heading text="Records" size="h1" />
      {/* <DaysFoodRecord date={new Date()} /> */}
      <MealLibrary date={new Date()} />
    </>
  );
}
