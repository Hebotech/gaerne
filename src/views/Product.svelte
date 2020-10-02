<script>
  import { navigate } from 'svelte-routing';
  import ProductExperience from 'Organisms/Product/ProductExperience';
  import Categories from './Categories.svelte';

  export let name;

  $: categoryName = 'Enduro';
  let product = {
    name: 'SG-12',
    shortDescription: 'Lo mejor que puede haber en la historia',
    longDescription:
      'GAERNE IS PROUD TO REPORT THAT MAGAZINES WORLD WIDE HAVE PUT OUR SG-12 THROUGH RIGORUS TESTS AND CAME BACK WITH 5 STAR REVIEWS CLAIMING IT THE MOST DURABLE, COMFORTABLE AND SUPPORTIVE BOOT MADE TO DATE.',
    images: [
      'http://www.gaerne.com/images/articoli/boots/2174_073.jpg',
      'http://www.gaerne.com/images/articoli/boots/2174_079.jpg',
      'http://www.gaerne.com/images/articoli/boots/2174_078.jpg',
      'http://www.gaerne.com/images/articoli/boots/2174-053--sito.jpeg',
    ],
  };
</script>

<style>
  .label {
    background-color: #000;
    cursor: pointer;
    padding: 1% 0;
  }
  .label h4 {
    color: white;
    font-family: 'Cousine';
    transition: all 0.5s ease-in;
    font-weight: 400;
  }
  .label:hover h4 {
    transition: all 0.5s ease-out;
    font-weight: bolder;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="container-fluid text-center">
  <div class="row">
    <div class="col-2 label" on:click={()=>navigate(`/categoria/${categoryName}`)}>
      <h4>
          {categoryName}
      </h4>
    </div>
    <div class="col-12 text-center">
      <h1>{name}</h1>
      <h3>{product.shortDescription}</h3>
    </div>
  </div>
<ProductExperience {...product}/>
</div>
