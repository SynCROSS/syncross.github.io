import Seo from 'components/common/Seo';
import { getRandomTheme } from 'lib/theme/work/github/GithubRepository';
import Image from 'next/image';
import Link from 'next/link';
import { FixedSizeList, type ListChildComponentProps } from 'react-window';

const githubRepoArray = [
  'nextjs-typescript-setting',
  'react-typescript-setting',
];

const GITHUB_USERNAME = 'SynCROSS';

const rowWidth = 300;
const rowHeight = 90;
const itemCount = githubRepoArray.length;
const rowCount = itemCount > 5 ? 5 : itemCount;

// skipcq: JS-D1001
function RepoRow({ index = 0, style = {} }: ListChildComponentProps) {
  const repo = githubRepoArray?.[index] ?? '';
  return (
    <Link
      href={`https://github.com/${GITHUB_USERNAME}/${repo}`}
      // skipcq: JS-0394
      style={style}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={`https://github-readme-stats.vercel.app/api/pin?${new URLSearchParams(
          {
            username: GITHUB_USERNAME,
            repo,
            theme: getRandomTheme(),
            hide_border: 'true',
            show_icons: 'true',
            count_private: 'true',
          },
        ).toString()}`}
        alt={repo}
        title={repo}
        width={rowWidth}
        height={rowHeight}
        // loading="lazy"
        priority
      />
    </Link>
  );
}

// skipcq: JS-D1001
function Work() {
  return (
    <main className="work">
      <Seo siteTitle="My Works" canonicalHref="/Work" />
      <h1 className="work-title">My Works</h1>
      <p>&#x28;Theme is Random&#x29;</p>
      <div className="list-wrapper">
        <FixedSizeList
          width={rowWidth}
          height={rowHeight * rowCount}
          itemCount={itemCount}
          itemSize={rowHeight}
        >
          {RepoRow}
        </FixedSizeList>
      </div>
      <style jsx>
        {`
          .work {
            align-items: baseline;
            margin: auto;
          }
          .work-title {
            margin: 0 auto;
            font-size: 3rem;
          }
          .list-wrapper {
            margin: 2rem auto;
          }
          @media only screen and (max-width: 600px) {
            .work-title {
              font-size: 2.4rem;
            }
          }
        `}
      </style>
    </main>
  );
}

export default Work;
