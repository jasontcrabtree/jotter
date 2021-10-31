import Link from 'next/link';

import Heading from '../elements/Heading/Heading';

type MealLibraryProps = {
  date?: Date;
};

/**
 *
 * @param {object} props Properties passed into the function
 * @returns {function} JSX Function
 */
function MealLibrary({ date }: MealLibraryProps): JSX.Element {
  return (
    <div>
      <Link href="/library/oats-protein" passHref>
        <a href="replace">
          Detailed view of{' '}
          <span className="text-med">Oats and Protein Powder</span> meal
        </a>
      </Link>

      <Heading size="h3" text="List of all library foods" />
      <ul>
        <li>Oats & Protein powder</li>
        <li>Oat crackers with Avocado</li>
        <li>Chicken and beetroot salad</li>
        <li>Granola & Yoghurt</li>
        <li>x3 Coffees (100g milk)</li>
      </ul>
    </div>
  );
}
export default MealLibrary;
