/**
 * METAMEN100 - Lint Staged Configuration
 * Ejecuta linting y formatting en archivos staged antes del commit
 */
module.exports = {
  // TypeScript/JavaScript files
  '*.{ts,tsx}': ['eslint --fix --max-warnings=0 --no-warn-ignored', 'prettier --write'],

  // JavaScript files (config files)
  '*.{js,jsx,mjs}': ['eslint --fix --max-warnings=0 --no-warn-ignored', 'prettier --write'],

  // JSON files
  '*.json': ['prettier --write'],

  // CSS/SCSS files
  '*.{css,scss}': ['prettier --write'],

  // SQL files (migraciones)
  '*.sql': ['prettier --write'],
};
