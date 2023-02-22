import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FixedSizeList } from 'react-window';
import type { CSSProperties } from 'styled-components';
import styled from 'styled-components';
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

/**
 * Get Repository Card Image URL
 * @param {string} repo Repository name
 * @returns {string} Repository Card Image URL
 */
const getRepoImgURL = (repo: string): string => {
  if (!repo) {
    return '';
  }

  const params = new URLSearchParams({
    username: GITHUB_USERNAME,
    repo,
    theme: getRandomTheme(),
    hide_border: 'true',
    show_icons: 'true',
    count_private: 'true',
  }).toString();

  return `https://github-readme-stats.vercel.app/api/pin?${params}`;
};

/**
 * Get Full Repository URL
 * @param {string} repo Repository name
 * @returns {string} Full repository url
 */
const getRepoURL = (repo: string): string =>
  repo && `https://github.com/${GITHUB_USERNAME}/${repo}`;

const rowWidth = 300;
const rowHeight = 90;
const itemCount = githubRepoArray?.length || 0;
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
      href={getRepoURL(`${repo}`)}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={getRepoImgURL(`${repo}`)}
        alt={`${repo}`}
        title={`${repo}`}
        width={rowWidth}
        height={rowHeight}
        quality={100}
        loading="lazy"
      />
    </Link>
  );
}

// skipcq: JS-D1001
function Work(): JSX.Element {
  return (
    <WorkBlock>
      <Head>
        <title>My Works</title>
        <link rel="canonical" href="https://syncross.vercel.app/Work" />
      </Head>
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
