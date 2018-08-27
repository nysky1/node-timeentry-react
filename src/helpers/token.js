import jwtDecode from 'jwt-decode';
import appConfig from '../config/appConfig';

const hasToken = () => {
  const token = sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY);
  try {
    const tokenPayload = jwtDecode(token);
    const expiresIn = tokenPayload.exp * 1000;
    const now = new Date().getTime();
    if (token && expiresIn > now) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export default hasToken;