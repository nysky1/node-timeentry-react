import getEnv from './environments';

const  MAIN_APP_AUTHORITY  = getEnv().MAIN_APP_AUTHORITY;

export default {
  
  USER_LOGIN_ENDPOINT: `${MAIN_APP_AUTHORITY}/login`,
  USER_VALIDATE_ENDPOINT: `${MAIN_APP_AUTHORITY}/loginValidate`,
  USER_ENDPOINT: `${MAIN_APP_AUTHORITY}/users`,
  
};
