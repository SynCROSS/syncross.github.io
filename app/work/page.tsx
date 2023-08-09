import { getRandomTheme } from 'lib/theme/work/github/GithubRepository';
import { getMetadata } from 'lib/utility/seo';
import { bindStyle } from 'lib/utility/style';
import Image from 'next/image';
import Link from 'next/link';
import { Children } from 'react';

import styles from 'styles/Work.module.css';

export const metadata = getMetadata({
  siteTitle: 'My Works',
  canonicalHref: '/work',
});

const cx = bindStyle(styles);

const githubRepoArray = [
  'nextjs-typescript-setting',
  'react-typescript-setting',
];

// skipcq: JS-D1001
function Work() {
  return (
    <main className={cx('work')}>
      <h1 className={cx('work-title')}>My Works</h1>
      <p>&#x28;Theme is Random&#x29;</p>
      <ul className={cx('repo-list')}>
        {Children.toArray(
          githubRepoArray.map(repo => (
            <li>
              <Link
                href={`https://github.com/SynCROSS/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cx('repo-link')}
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
    </main>
  );
}

export default Work;
