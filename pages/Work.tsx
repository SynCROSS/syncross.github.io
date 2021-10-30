import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import { getRandomTheme } from '../lib/theme/GithubRepository';
import { useCallback } from 'react';

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

  return (
    <WorkBlock>
      <Head>
        <title>My Works</title>
      </Head>
      <h1>My Works</h1>
      <p>(Theme is Random)</p>
      <div style={{ margin: '2rem auto' }}>
        <ul className="flex flex-direction-col jc-center ai-center">
          {githubRepoArray?.map?.(repo => (
            <li key={repo} style={{ margin: '5px auto' }}>
              <Image
                src={getRepoImgURL(`${repo}`)}
                // sizes={'2w'}
                // layout={'responsive'}
                width={300}
                height={90}
                quality={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </WorkBlock>
  );
};

export default Work;
