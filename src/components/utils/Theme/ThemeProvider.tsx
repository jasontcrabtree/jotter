import ThemeContext from './ThemeContext';

type ThemeProvider = {
  children: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function ThemeProvider({ children, value }: ThemeProvider): JSX.Element {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export default ThemeProvider;
