import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',

  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  use: {
  baseURL: 'https://api.trello.com/1/',
  } 
};

export default config;
