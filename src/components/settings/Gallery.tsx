// A gallery of images

type Props = {
  props: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function Gallery(props: Props): JSX.Element {
  console.log(props);

  return (
    <>
      <h2>Gallery</h2>
      <p>Gallery of progress</p>
    </>
  );
}
export default Gallery;
