import { useContext } from 'react';
import ThemeContext from './ThemeContext';

type ToggleProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggle: any;
};

/**
 *
 * @param {object} toggle Properties passed into the function
 * @returns {function} JSX Function
 */
function ToggleThemeButton({ toggle }: ToggleProps): JSX.Element {
  // /**
  //  *
  //  * @returns {function} Function
  //  */
  // function toggleSwitch({ currentTheme, changeTheme }) {
  //   if (currentTheme === currentTheme) {
  //     changeTheme(!currentTheme);
  //   } else if (currentTheme !== currentTheme) {
  //     changeTheme(currentTheme);
  //   }
  //   // theme === theme.darkMode
  //   //   ? setTheme(theme.lightMode)
  //   //   : setTheme(theme.darkMode);
  // }

  return <button onClick={toggle}>Toggle Theme</button>;
}

export default ToggleThemeButton;
