// A list of all food records

import Heading from '../elements/Heading/Heading';
import DaysFoodRecord from './DaysFoodRecord';

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
export default function Records(props: Props): JSX.Element {
  // console.log(props);

  return (
    <>
      <Heading text="Records" size="h1" />
      <DaysFoodRecord date={new Date()} />
    </>
  );
}
