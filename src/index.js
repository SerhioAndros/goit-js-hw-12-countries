import './sass/main.scss';
import { fetchCountries } from './fetchCountries.js';
const inputNode = document.querySelector('.input-field');

inputNode.addEventListener('input', _.debounce(dataRequest, 500));

function dataRequest() {
  const countriesTmp = fetchCountries(inputNode.value);
  console.log(countriesTmp);
}
