module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'pnpm turbo check',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': () => 'pnpm turbo lint',

  // Format MarkDown and JSON
  '**/*.(md|json)': filenames => `pnpm prettier --write ${filenames.join(' ')}`,
};
