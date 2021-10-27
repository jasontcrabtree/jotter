import { createContext } from 'react';
import { themes } from './Themes';

// type Props = {
//   props: unknown;
// };

export const ThemeContext = createContext(themes.lightMode);

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
// function ThemeContext(props: Props): JSX.Element {
//   console.log(props);

//   return <div>Hello! {props ? <div>Props</div> : <div>No props</div>}</div>;
// }

export default ThemeContext;
