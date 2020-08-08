const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://techflixseries.herokuapp.com';

const KEY_SECURITY = 'JUBILEU';

export default {
  URL_BACKEND,
  KEY_SECURITY,
};
