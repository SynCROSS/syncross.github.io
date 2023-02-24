import Image from 'next/image';
import Link from 'next/link';
import { FixedSizeList } from 'react-window';
import type { CSSProperties } from 'styled-components';
import styled from 'styled-components';
import SEO from '../components/common/Seo';
import { getRandomTheme } from '../lib/theme/work/github/GithubRepository';

const WorkBlock = styled.main`
  align-items: baseline;
  margin: auto;
`;

const WorkTitle = styled.h1`
  margin: 0 auto;
  font-size: 3rem;

  @media only screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

const ListWrapper = styled.div`
  margin: 2rem auto;
`;

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
function RepoRow({
  index = 0,
  style = {},
}: {
  index: number;
  style: CSSProperties;
}): JSX.Element {
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
function Work(): JSX.Element {
  return (
    <WorkBlock>
      <SEO siteTitle="My Works" canonicalHref="/Work" />
      <WorkTitle>My Works</WorkTitle>
      <p>&#x28;Theme is Random&#x29;</p>
      <ListWrapper>
        <FixedSizeList
          width={rowWidth}
          height={rowHeight * rowCount}
          itemCount={itemCount}
          itemSize={rowHeight}
        >
          {RepoRow}
        </FixedSizeList>
      </ListWrapper>
    </WorkBlock>
  );
}

export default Work;
