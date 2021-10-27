// import { useState } from 'react';
// import { themes } from '../components/utils/Theme/Themes';
// import ToggleThemeButton from '../components/utils/Theme/ToggleThemeButton';
// import ThemeButton from '../components/utils/Themes/ThemeButton';
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

  return (
    <main>
      <h1>Hello {data.name}!</h1>
      {/* <ToggleThemeButton toggle={toggleDark} /> */}
      {/* <ThemeButton /> */}
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
