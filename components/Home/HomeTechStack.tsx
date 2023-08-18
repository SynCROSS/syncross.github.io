import classNames from 'classnames';
import Image from 'next/image';
import { Children } from 'react';

const techStacks = [
  {
    icon: 'mongodb',
  },
  {
    icon: 'express',
  },
  {
    icon: 'react',
  },
  {
    icon: 'nodedotjs',
  },
];

// skipcq: JS-D1001
function HomeTechStack() {
  return (
    <section className={classNames('my-8 grid justify-center')}>
      <h1
        className={classNames(
          'my-8 text-center text-5xl',
          'min-[2560px]:text-7xl',
          'min-[3840px]:text-9xl',
        )}
      >
        Tech Stack
      </h1>
      <ul
        className={classNames(
          'inline-flex justify-center items-center flex-wrap flex-col',
        )}
      >
        {Children.toArray(
          techStacks.map(({ icon }) => (
            <li
              className={classNames(
                'flex justify-center items-center rounded-full bg-neutral-50 shadow-[2em_2em_6em_#d9d9d9,-2em_-2em_6em_#ffffff] w-28 h-28 mb-4 motion-safe:transition-all hover:bg-neutral-200',
                'min-[2560px]:w-40 min-[2560px]:h-40',
                'min-[3840px]:w-80 min-[3840px]:h-80',
              )}
            >
              <Image
                src={`https://unpkg.com/simple-icons@v5/icons/${icon}.svg`}
                alt={icon}
                className={classNames(
                  'aspect-square',
                  'min-[2560px]:w-20 min-[2560px]:h-20',
                  'min-[3840px]:w-40 min-[3840px]:h-40',
                )}
                title={icon}
                width={70}
                height={70}
                priority
              />
            </li>
          )),
        )}
      </ul>
    </section>
  );
}

export default HomeTechStack;
