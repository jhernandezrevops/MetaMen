import { defineConfig, devices } from '@playwright/test';

/**
 * METAMEN100 - Playwright Configuration
 * Configuración de tests E2E
 *
 * @see docs/08_Test_Plan.md para escenarios E2E
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Directorio de tests E2E
  testDir: './tests/e2e',

  // Ejecutar tests en paralelo
  fullyParallel: true,

  // Fallar el build si hay test.only en CI
  forbidOnly: !!process.env['CI'],

  // Reintentos en CI
  retries: process.env['CI'] ? 2 : 0,

  // Workers en CI
  workers: process.env['CI'] ? 1 : undefined,

  // Reporter
  reporter: [['html', { outputFolder: 'playwright-report' }], ['list']],

  // Configuración global de tests
  use: {
    // URL base de la aplicación
    baseURL: process.env['PLAYWRIGHT_BASE_URL'] ?? 'http://localhost:3000',

    // Capturar trace en caso de fallo
    trace: 'on-first-retry',

    // Capturar screenshot en caso de fallo
    screenshot: 'only-on-failure',

    // Capturar video en caso de fallo
    video: 'on-first-retry',

    // Viewport por defecto
    viewport: { width: 1280, height: 720 },

    // Locale
    locale: 'es-MX',

    // Timezone
    timezoneId: 'America/Mexico_City',
  },

  // Proyectos (browsers)
  projects: [
    // Desktop Chrome
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Desktop Firefox
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // Desktop Safari
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Mobile Chrome (Android)
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    // Mobile Safari (iPhone)
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // Servidor de desarrollo para tests
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env['CI'],
    timeout: 120 * 1000,
  },

  // Timeout global
  timeout: 30 * 1000,

  // Expect timeout
  expect: {
    timeout: 5000,
  },

  // Output directory para artifacts
  outputDir: 'test-results/',
});
