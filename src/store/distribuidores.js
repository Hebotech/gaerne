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

    let companiesArray = companies
      .filter(
        (company) =>
          company.properties.gaerne &&
          company.properties.gaerne.value === 'true'
      )
      .filter(
        (company) =>
          company.properties.address && company.properties.address.value !== ''
      )
      .filter(
        (company) =>
          company.properties.ubicaciones_mapa &&
          company.properties.ubicaciones_mapa.value.length
      )
      .flatMap(({ properties: company }, index) => {
        let coordinatesArray = company.ubicaciones_mapa.value
          .replace(/\s+/g, '')
          .split(';')
          .map((coordine, index) => {
            let coordinates = coordine.replace(/\s+/g, '').split(',').reverse();

            let finalObject = {
              name: company.name.value,
              website: company.website ? company.website.value : null,
              description: company.description
                ? company.description.value
                : null,
              fav: company.fav ? company.fav.value : false,
              address: company.address.value.split(';')[index],
              coordinates,
            };

            return finalObject;
          });
        return coordinatesArray;
      });
    // .map(({ properties: company }) => {
    //   return {
    //     name: company.name
    //       ? company.name.value
    //       : company.website.value || 's',
    //     website: company.website ? company.website.value : null,
    //     fav: company.fav ? company.fav.value : false,
    //   };
    // });

    console.log(companiesArray);

    return set(companiesArray);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const distribuidoresStore = createDistribuidores();
