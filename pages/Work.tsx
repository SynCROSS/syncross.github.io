import styled, { CSSProperties } from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import { getRandomTheme } from '../lib/theme/GithubRepository';
import { useCallback, useEffect, useState } from 'react';
import { FixedSizeList } from 'react-window';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WorkBlock = styled.div`
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

const Work = () => {
  const githubRepoArray = ['nextjs-typescript-setting'];

  const GITHUB_USERNAME = 'SynCROSS';

  const getRepoImgURL = (repo: string = ''): string =>
    !!repo
      ? `https://github-readme-stats.vercel.app/api/pin/` +
        '' +
        `?username=${GITHUB_USERNAME}&repo=${repo}&theme=${getRandomTheme()}` +
        '' +
        `&hide_border=true&show_icons=true&count_private=true`
      : '';

  const getRepoURL = (repo: string): string =>
    repo && `https://github.com/${GITHUB_USERNAME}/${repo}`;

  const rowWidth = 300;
  const rowHeight = 90;
  const itemCount = githubRepoArray?.length || 0;
  const rowCount = itemCount > 5 ? 5 : itemCount;

  const repoRow = useCallback(
    ({
      index = 0,
      style = {},
    }: {
      index: number;
      style: CSSProperties;
    }): JSX.Element => {
      const repo = githubRepoArray?.[index] ?? '';

      return (
        <Link href={getRepoURL(`${repo}`)}>
          <a style={style} target="_blank" rel="noopener noreferrer">
            <Image
              src={getRepoImgURL(`${repo}`)}
              alt={`${repo}`}
              title={`${repo}`}
              width={rowWidth}
              height={rowHeight}
              quality={100}
            />
          </a>
        </Link>
      );
    },
    [],
  );

  const [loading, setLoading] = useState(true);
  const { isReady } = useRouter();

  useEffect(() => {
    if (isReady) {
      setLoading(() => false);
    }
  }, [isReady]);

  if (loading) {
    return (
      <WorkBlock className="flex jc-center ai-center flex-direction-col">
        <Head>
          <title>My Works</title>
          <link rel="canonical" href="https://syncross.vercel.app/Work" />
        </Head>
      </WorkBlock>
    );
  }

  return (
    <WorkBlock>
      <Head>
        <title>My Works</title>
        <link rel="canonical" href="https://syncross.vercel.app/Work" />
      </Head>
      <WorkTitle>My Works</WorkTitle>
      <p>&#x28;Theme is Random&#x29;</p>
      <div style={{ margin: '2rem auto' }}>
        <FixedSizeList
          width={rowWidth}
          height={rowHeight * rowCount}
          itemCount={itemCount}
          itemSize={rowHeight}
        >
          {repoRow}
        </FixedSizeList>
      </div>
    </WorkBlock>
  );
};

export default Work;
