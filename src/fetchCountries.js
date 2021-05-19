const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

const fetchCountries = (request = '') =>
  fetch(BASE_URL + request).then(res => {
    if (res.status === 404) {
      throw new Error(`Страна не найдена! Попробуйте еще раз`);
    }
    return res.json();
  });
export { fetchCountries };
