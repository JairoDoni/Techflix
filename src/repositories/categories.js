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
}
function create(objectCategory) {
  return fetch(`${URL_CATEGORIES}?_embed=categories`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objectCategory),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possivel pegar os dados :(');
    });
}
// NÃO FUNCIONA AINDA (esta em desenvolvimento)
function deleteCategory(objectCategory) {
  return fetch(`${URL_CATEGORIES}?_embed=categories`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.delete(objectCategory),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possivel pegar os dados :(');
    });
}
export default {
  getAllWithVideos,
  getAll,
  create,
  deleteCategory,
};
