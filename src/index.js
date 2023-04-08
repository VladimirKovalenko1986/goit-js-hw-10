import './css/styles.css';
import debounce from 'lodash.debounce';
import CounriesApiService from './components/fetchCountries';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import getRefs from './components/getRefs';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

const counriesApiService = new CounriesApiService();

refs.inputEl.addEventListener(
  'input',
  debounce(onSearchCountry, DEBOUNCE_DELAY)
);

function onSearchCountry(e) {
  e.preventDefault();

  counriesApiService.searchQuery = e.target.value.trim();
  // console.log(
  //   '🚀 ~ onSearchCountry ~ counriesApiService.searchQuery:',
  //   counriesApiService.searchQuery
  // );

  if (counriesApiService.searchQuery === '') {
    clearCountries();
    return;
  }
  counriesApiService.fetchCountries().then(renderCountriesList);
}

function clearCountries() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function renderCountriesList(countries) {
  if (countries === undefined) {
    clearCountries();
    return;
  } else if (countries.length > 10) {
    clearCountries();
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (countries.length === 1) {
    const langueg = Object.values(country.languages).join(', ');
    markup = countries
      .map(country => {
        return `<li ><img src=${country.flags.svg} width="40" alt=${country.flags.alt}></img>
        <h1>${country.name.official}</h1><h3>Capital: <span>${country.capital}</span></h3>
        <h3>Population: <span>${country.population}</span></h3>
        <h3>languages: <span>${langueg}</span></h3></li>`;
      })
      .join('');
    refs.countryInfo.innerHTML = markup;
    refs.countryList.innerHTML = '';
  } else {
    markup = countries
      .map(country => {
        return `<li class="country-element">
        <img src=${country.flags.svg} width="40" alt=${country.flags.alt}></img>
        <h2>${country.name.official}</h2></li>`;
      })
      .join('');
    refs.countryList.innerHTML = markup;
    refs.countryInfo.innerHTML = '';
  }
}
