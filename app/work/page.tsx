import classNames from 'classnames';
import { getRandomTheme } from 'lib/theme/work/github/GithubRepository';
import { getMetadata } from 'lib/utility/seo';
import Image from 'next/image';
import Link from 'next/link';
import { Children } from 'react';

export const metadata = getMetadata({
  siteTitle: 'My Works',
  canonicalHref: '/work',
});

const githubRepoArray = [
  'nextjs-typescript-setting',
  'react-typescript-setting',
];

// skipcq: JS-D1001
function Work() {
  return (
    <>
      <h1
        className={classNames(
          'text-5xl mb-2',
          'max-[640px]:text-4xl',
          'min-[2560px]:text-6xl',
        )}
      >
        My Works
      </h1>
      <p>&#x28;Theme is Random&#x29;</p>
      <ul className={classNames('my-4')}>
        {Children.toArray(
          githubRepoArray.map(repo => (
            <li>
              <Link
                href={`https://github.com/SynCROSS/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames('w-80 h-24 inline-block relative')}
              >
                <Image
                  key={repo}
                  src={`https://github-readme-stats.vercel.app/api/pin?${new URLSearchParams(
                    {
                      username: 'SynCROSS',
                      repo,
                      theme: getRandomTheme(),
                      hide_border: 'true',
                      show_icons: 'true',
                      count_private: 'true',
                    },
                  ).toString()}`}
                  alt={repo}
                  title={repo}
                  fill
                  // loading="lazy"
                  priority
                  sizes="(max-width: 768px) 100vw,(max-width: 1024px) 50vw,33vw"
                />
              </Link>
            </li>
          )),
        )}
      </ul>
    </>
  );
}

export default Work;
