import './sass/main.scss';
import { fetchCountries } from './fetchCountries.js';
import makeCountryMarkup from './templates/countryOutput.hbs';
import makeCountriesListMarkup from './templates/countriesList.hbs';
import makeAlert from './templates/alert.hbs';

const inputNode = document.querySelector('.input-field');
const wrapperNode = document.querySelector('.output-wrapper');

inputNode.addEventListener('input', _.debounce(dataRequest, 1000));

function dataRequest() {
  if (inputNode.value === '') return false;
  fetchCountries(inputNode.value).then(data => countryListHandler(data));
}

function renderCountry(data) {
  const countryMarkup = makeCountryMarkup(...data);
  wrapperNode.innerHTML = countryMarkup;
}

function renderCountryList(data) {
  const countryListMarkup = data.map(country => makeCountriesListMarkup(country)).join('');
  wrapperNode.innerHTML = `<ul class="countries-list"> ${countryListMarkup} </ul>`;
}

function countryListHandler(data) {
  if (data.length > 10) wrapperNode.innerHTML = makeAlert();
  if (data.length > 1 && data.length <= 10) renderCountryList(data);
  if (data.length === 1) renderCountry(data);
}
