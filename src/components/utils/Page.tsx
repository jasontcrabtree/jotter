import Nav from '../sidebar/Nav/Nav';
import styles from './Page.module.css';

type Children = {
  children: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function Page({ children }: Children): JSX.Element {
  return (
    <div className={styles.pageStyles}>
      <Nav />
      <>{children}</>
    </div>
  );
}
export default Page;
