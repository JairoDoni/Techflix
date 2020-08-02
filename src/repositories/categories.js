import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possivel pegar os dados :(');
    });
  // console.log(config.URL_BACKEND);
}
function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possivel pegar os dados :(');
    });
  // console.log(config.URL_BACKEND);
}

export default {
  getAllWithVideos,
  getAll,
};
