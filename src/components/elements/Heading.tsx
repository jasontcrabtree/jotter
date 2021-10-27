type HeadingProps = {
  size: string;
  text: string;
  style: boolean;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function Heading({ size, text, style }: HeadingProps): JSX.Element {
  // style === capitalization

  // size === size of heading

  return <div>{text}</div>;
}
export default Heading;
