import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import { getRandomTheme } from '../lib/theme/GithubRepository';
import { useCallback } from 'react';
import { FixedSizeList } from 'react-window';

const WorkBlock = styled.div`
  align-items: baseline;
  margin: auto;
`;

const Work = () => {
  const githubRepoArray = ['nextjs-typescript-setting'];

  const GITHUB_USERNAME = 'SynCROSS';
  const getRepoImgURL = (repo: string): string =>
    repo &&
    `https://github-readme-stats.vercel.app/api/pin/` +
      '' +
      `?username=${GITHUB_USERNAME}&repo=${repo}&theme=${getRandomTheme()}` +
      '' +
      `&hide_border=true&show_icons=true&count_private=true`;

  const rowWidth = 300;
  const rowHeight = 90;
  const itemCount = githubRepoArray?.length || 0;
  const rowCount = itemCount > 5 ? 5 : itemCount;

  const repoRow = useCallback(({ index, style }): JSX.Element => {
    const repo = githubRepoArray[index];

    return (
      <div style={style}>
        <Image
          src={getRepoImgURL(`${repo}`)}
          alt={`${repo}`}
          title={`${repo}`}
          width={rowWidth}
          height={rowHeight}
          quality={100}
        />
      </div>
    );
  }, []);

  return (
    <WorkBlock>
      <Head>
        <title>My Works</title>
        <link rel="canonical" href="https://syncross.vercel.app/Work" />
      </Head>
      <h1>My Works</h1>
      <p>(Theme is Random)</p>
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
