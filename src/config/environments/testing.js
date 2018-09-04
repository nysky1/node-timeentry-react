import defaultConfig from './default';

export default {
  ...defaultConfig,
  CONFIG_NAME: 'Test Config',
  SHOW_REDUX_DEV_TOOLS: true,
  MAIN_APP_AUTHORITY: 'http://localhost:8080/api', // Without slash - endpoints are prefixed
};
