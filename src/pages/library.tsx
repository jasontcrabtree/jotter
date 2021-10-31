import Heading from '../components/elements/Heading/Heading';
import Library from '../components/library/Library';
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
function LibraryPage(props: Props): JSX.Element {
  const data = props.authors[0];
  console.log(data);

  return (
    <main>
      <Heading text="Meals Library" size="h1" />
      <Library />
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

export default LibraryPage;
