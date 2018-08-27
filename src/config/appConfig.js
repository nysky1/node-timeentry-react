import getEnv from './environments';
import endpoints from './endpoints';

export default {
  ...getEnv(),
  ...endpoints,
};
