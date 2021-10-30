function GithubRepositoryTheme() {
  return [
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
}

export function getRandomTheme(): string {
  const themes = GithubRepositoryTheme();

  return themes.sort(() => Math.random() - 0.5)[
    Math.floor(Math.random() * themes.length)
  ];
}

export default GithubRepositoryTheme;
