import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objectVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objectVideo),
  })
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
  create,
};
