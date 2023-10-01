const GithubRepoThemes = [
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
] as const;

/**
 * Get Random Theme From GithubRandomThemes
 * @returns {string} Random Theme From GithubRepoThemes
 */
const getRandomTheme = () => {
  const themes = [...GithubRepoThemes];

  for (let i = themes.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [themes[i] = 'default', themes[j] = 'default'] = [themes[j], themes[i]];
  }

  return themes[Math.floor(Math.random() * themes.length)] ?? 'default';
};

export { GithubRepoThemes, getRandomTheme };
