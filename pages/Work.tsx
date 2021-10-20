import styled from 'styled-components';
import Head from 'next/head';

const WorkBlock = styled.div`
  align-items: baseline;
  margin: auto;
`;

const Work = () => {
  const githubRepoArray = ['nextjs-typescript-setting'];

  const generateURL = (repo: string) => {
    if (!repo) {
      return '';
    }

    const getRandomTheme = () => {
      const themes = [
        'default',
        'default_repocard',
        'dark',
        'radical',
        'merko',
        'gruvbox',
        'gruvbox_light',
        'tokyonight',
        'onedark',
        'cobalt',
        'synthwave',
        'highcontrast',
        'dracula',
        'prussian',
        'monokai',
        'vue',
        'vue-dark',
        'shades-of-purple',
        'nightowl',
        'buefy',
        'blue-green',
        'algolia',
        'great-gatsby',
        'darcula',
        'bear',
        'solarized-dark',
        'solarized-light',
        'chartreuse-dark',
        'nord',
        'gotham',
        'material-palenight',
        'graywhite',
        'vision-friendly-dark',
        'ayu-mirage',
        'midnight-purple',
        'calm',
        'flag-india',
        'omni',
        'react',
        'jolly',
        'maroongold',
        'yeblu',
        'blueberry',
        'slateorange',
        'kacho_ga',
        'outrun',
        'ocean_dark',
        'city_lights',
        'github_dark',
        'discord_old_blurple',
        'aura_dark',
        'panda',
        'noctis_minimus',
        'cobalt2',
      ];

      return themes.sort(() => Math.random() - 0.5)[
        Math.floor(Math.random() * themes.length)
      ];
    };

    const GITHUB_USERNAME = 'SynCROSS';

    return (
      `https://github-readme-stats.vercel.app/api/pin/` +
      '' +
      `?username=${GITHUB_USERNAME}&repo=${repo}&theme=${getRandomTheme()}` +
      '' +
      `&hide_border=true&show_icons=true&count_private=true`
    );
  };

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
            <li style={{ margin: '5px auto' }}>
              <img src={generateURL(repo)} alt={`${repo}`} />
            </li>
          ))}
        </ul>
      </div>
    </WorkBlock>
  );
};

export default Work;
