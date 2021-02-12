import axios from 'axios';
import { writable } from 'svelte/store';

function createDistribuidores() {
  let { subscribe, set, update } = writable(null);

  fetchProducts(set);

  return {
    subscribe,
  };
}

async function fetchProducts(set) {
  try {
    let {
      data: {
        data: { companies },
      },
    } = await axios.get('https://apihebo.online/gaerne/companies');

    let companiesArray = companies.map(({ properties: company }) => {
      console.log(company);
      return {
        name: company.name ? company.name.value : company.website.value,
        website: company.website.value,
        fav: company.fav ? company.fav.value : false,
      };
    });

    console.log(companiesArray);

    return set(companiesArray);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const distribuidoresStore = createDistribuidores();
