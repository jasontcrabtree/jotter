import clsx from 'clsx';
import styles from './Heading.module.css';

type HeadingProps = {
  size: string;
  text: string;
  capitalization?: boolean;
  hero?: boolean;
};

/**
 * @param {string} size Size of heading. 6 options
 * via html elements: [h1 = Page], [h2 = Component], [h3 = Element in Component], [h4 = Item in Element], [h5 = Inline (infrequent)], [h6 = Subitem (infrequent)]
 * @param {object} props Properties passed into the function
 * @returns {function} A Heading Component
 */
function Heading({
  size,
  text,
  capitalization,
  hero,
}: HeadingProps): JSX.Element {
  //   TODO: Maybe implement this heading size approach
  //  Change size based on props, check to see if semantic, default to h2

  /* const semanticHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const safeHeading = headingSize ? headingSize.toLowerCase() : '';
  const TitleSize = semanticHeadings.includes(safeHeading) ? safeHeading : 'h2'; */

  if (size === 'h1') {
    return (
      <h1
        className={clsx('text-brand', styles.heading, styles.headingPage, {
          'text-uppercase': capitalization,
          [styles.headingHero]: hero,
        })}>
        {text}
      </h1>
    );
  } else if (size === 'h2') {
    return (
      <h2
        className={clsx('text-brand', styles.heading, styles.headingComponent, {
          'text-uppercase': capitalization,
          [styles.headingHero]: hero,
        })}>
        {text}
      </h2>
    );
  } else if (size === 'h3') {
    return (
      <h3
        className={clsx('text-brand', styles.heading, styles.headingElement, {
          'text-uppercase': capitalization,
          [styles.headingHero]: hero,
        })}>
        {text}
      </h3>
    );
  } else if (size === 'h4') {
    return (
      <h4
        className={clsx('text-brand', styles.heading, styles.headingItem, {
          'text-uppercase': capitalization,
          [styles.headingHero]: hero,
        })}>
        {text}
      </h4>
    );
  } else if (size === 'h5') {
    return (
      <h5
        className={clsx('text-brand', styles.heading, styles.headingInline, {
          'text-uppercase': capitalization,
          [styles.headingHero]: hero,
        })}>
        {text}
      </h5>
    );
  } else if (size === 'h6') {
    return (
      <h6
        className={clsx('text-brand', styles.heading, styles.headingSubItem, {
          'text-uppercase': capitalization,
          [styles.headingHero]: hero,
        })}>
        {text}
      </h6>
    );
    // } else {
    //   return <h1 className="component-border">{text}</h1>;
  } else {
    return (
      <div
        className={clsx('default-classes', {
          'variable-true': capitalization,
          'variable-false': !capitalization,
        })}>
        Hello
      </div>
    );
  }
}
export default Heading;
