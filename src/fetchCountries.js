const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

const fetchCountries = (request = '') =>
  fetch(BASE_URL + request).then(response => response.json());

export { fetchCountries };
