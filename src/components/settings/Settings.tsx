import PersonalDetails from './PersonalDetails';
import Gallery from './Gallery';
import Goals from './Goals';

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function Settings(props: Props): JSX.Element {
  console.log(props);

  return (
    <>
      <Goals props="Goals" />
      <PersonalDetails props="Personal Details" />
      <Gallery props="Gallery" />
    </>
  );
}

export default Settings;
