// Simple vertical navigation for different parts of the app

import Link from 'next/link';
import styles from './Nav.module.css';

/**
 *
 * @returns {function} JSX Function
 */
function Nav(): JSX.Element {
  return (
    <nav className={styles.navParent}>
      <ul className={styles.listParent}>
        <li>
          <Link href="/" passHref>
            <a href="replace">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/library" passHref>
            <a href="replace">Library</a>
          </Link>
        </li>
        <li>
          <Link href="/settings" passHref>
            <a href="replace">Settings</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
