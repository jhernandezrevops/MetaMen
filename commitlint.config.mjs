/**
 * METAMEN100 - Commitlint Configuration
 * Validación de mensajes de commit siguiendo Conventional Commits
 */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'core',
        'auth',
        'onboarding',
        'dashboard',
        'tasks',
        'tools',
        'store',
        'avatar',
        'payments',
        'ui',
        'db',
        'api',
        'config',
        'deps',
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 72],
  },
};

export default config;
