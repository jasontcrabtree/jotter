// import { useState } from 'react';
// import { themes } from '../components/utils/Theme/Themes';
import styles from '../styles/page-css-modules/homepage.module.css';
import Records from '../components/log/Records';
import prisma from '../lib/prisma';

type Props = {
  props: unknown;
  authors: unknown;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
export default function Home(props: Props): JSX.Element {
  // const [theme, setTheme] = useState(themes.lightMode);

  const data = props.authors[0];
  // console.log(data);

  return (
    <main className={styles.homePageWrapper}>
      <Records props="Records" />
    </main>
  );
}

export const getServerSideProps = async (): Promise<{
  props: { authors: unknown };
}> => {
  const authors = await prisma.author.findMany();

  console.log(authors);

  return {
    props: {
      authors: JSON.parse(JSON.stringify(authors)),
    },
  };
};
