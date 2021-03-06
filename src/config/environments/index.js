import defaultEnv from './default';
import productionEnv from './production';
import developmentEnv from './development';
import testEnv from './testing';

const getEnv = () => {
  const env = process.env.NODE_ENV;
  switch (env) {
    case 'production':
      return productionEnv;
    case 'development':
      return developmentEnv;
      case 'test':
      return testEnv;  
    default:
      return defaultEnv;
  }
};

export default getEnv;
