import axios from 'axios';
import { writable } from "svelte/store";

function createProducts() {
  let { subscribe, set, update } = writable(null)
  fetchProducts(set)
  
  return {
    subscribe
  }
};

async function fetchProducts(set) {
  try {
    let { data: { data: products } } = await axios.get('http://localhost:9000/gaerne');

    // let productsArray = products.filter((product) => product.meta_data.find(data => data.key === 'estilo_gaerne'))
    // console.log(products)


    return set(products)
    
  } catch (error) {
   return(error) 
  }
};

export const productsStore = createProducts();
