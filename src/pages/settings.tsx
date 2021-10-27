import Settings from '../components/settings/Settings';
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
  const data = props.authors[0];

  return (
    <main>
      <Settings props="Hey" />
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
