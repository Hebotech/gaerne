<script>
  import { navigate } from 'svelte-routing';

  import ProductExperience from 'Organisms/Product/ProductExperience';
  import RelatedProducts from 'Organisms/Product/RelatedProducts';

  export let name;

  $: category = {
    name: 'Enduro',
    products: [
      {
        name: 'SG-12',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_073.jpg'],
      },
      {
        name: 'SG-14',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
      },

      {
        name: 'SH-212',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_073.jpg'],
      },
      {
        name: 'SH3812',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
      },
      {
        name: 'SH315',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
      },

      {
        name: 'SH-319',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_073.jpg'],
      },
      {
        name: 'SH-320',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
      },
    ],
  };
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
    padding: 0.5% 0;
    justify-self: flex-end;
  }
  .label span {
    cursor: pointer;
  }
  .label span:hover {
    text-decoration: underline;
  }
  .label h4 {
    color: white;
    font-family: Cousine;
  }
  .label span {
    transition: all 0.5s ease-in;
    font-weight: 400;
  }
  .label:hover span {
    transition: all 0.5s ease-out;
    font-weight: 700;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="container-fluid text-center">
  <div class="row justify-content-end">
    <div class="col-md-4 col-7 label">
      <h4>
        <span on:click={()=>navigate(`/categoria/${category.name}`)}>
          {category.name}
        </span>
           / {product.name}
      </h4>
    </div>
  </div>
<ProductExperience {...product}/>
<RelatedProducts products={category.products}/>
</div>
