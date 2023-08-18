import classNames from 'classnames';
import Link from 'next/link';
import { Children } from 'react';

const navigationMap = {
  '/': 'Home',
  '/about': 'About',
  '/work': 'My Works',
} as const;

// skipcq: JS-D1001
function NavigationList() {
  return (
    <ul
      className={classNames(
        'inline-flex',
        'max-sm:flex-1 max-sm:justify-center max-sm:items-center max-sm:flex-col',
        'min-[2560px]:text-2xl',
        'min-[3840px]:text-4xl',
      )}
    >
      {Children.toArray(
        Object.entries(navigationMap).map(([href, title]) => (
          <li
            className={classNames(
              'motion-safe:transition-all hover:text-neutral-600 font-medium',
              'max-sm:text-neutral-300 max-sm:my-2 max-sm:mx-0',
              'sm:my-0 sm:mx-2 sm:text-neutral-500',
              'md:mx-4',
              'min-[3840px]:mx-6',
            )}
          >
            <Link href={href}>{title}</Link>
          </li>
        )),
      )}
    </ul>
  );
}
export default NavigationList;
