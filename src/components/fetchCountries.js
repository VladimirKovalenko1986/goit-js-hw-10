import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const API_URL = 'https://restcountries.com/v3.1/name/';

export default class CounriesApiService {
  constructor() {
    this.searchQuery = '';
    this.markup = '';
  }
  fetchCountries() {
    return fetch(`${API_URL}${this.searchQuery}?fields=name,capital,population,flags,languages
`)
      .then(responce => {
        if (!responce.ok) {
          throw new Error(responce.status);
        }
        return responce.json();
      })
      .then(data => {
        // console.log(data);
        return data;
      })
      .catch(error =>
        Notiflix.Notify.failure('Oops, there is no country with that name')
      );
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
