import axios from 'axios';
import store from '../store/store';

export function conexionApi() {
  axios.get('https://rickandmortyapi.com/api/character/').then(response => {
    console.log(response.data.results);
    store.dispatch('recibidoInfoAPI', response.data.results);
  }).catch(error => {
    console.error(error);
  })
}