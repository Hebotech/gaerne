<script>
  import { navigate } from 'svelte-routing';

  import ProductExperience from 'Organisms/Product/ProductExperience';
  import RelatedProducts from 'Organisms/Product/RelatedProducts';
  import { productsStore } from '../store/products';

  import ProductCard from '../components/Molecules/Home/ProductCard.svelte';

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

  // let product;
  // let asyncStatus;
  $: product = $productsStore
    ? $productsStore.find((producta) => producta.slug === name)
    : null;

  let mockProduct = {
    name: '',
    description: '',
    short_description: '',
    images: [
      {
        src: '/images/loader_product.png',
      },
    ],
  };

  $: products = $productsStore
    ? $productsStore.filter(
        (producta) =>
          producta.meta_data.find((meta) => meta.key === 'estilo_gaerne')
            .value ===
          product.meta_data.find((meta) => meta.key === 'estilo_gaerne').value
      )
    : null;
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
    {#if $productsStore}
      {#if product !== undefined}
        <div class="col-md-7 col-7 label">
          <h4>
            <span
              on:click={() => navigate(`/categoria/${product.meta_data.find((meta) => meta.key === 'estilo_gaerne').value}`)}>
              {product.meta_data.find((meta) => meta.key === 'estilo_gaerne').value}
            </span>
            /
            {product.name}
          </h4>
        </div>
        <ProductExperience {...product} />
        {#if products === []}
          <RelatedProducts products={$productsStore} />
        {:else}
          <RelatedProducts {products} />
        {/if}
      {:else}{navigate('/')}{/if}
    {:else}
      <div class="col-md-12 col-7 label">
        <h4>
          <span>
            <img src="/images/logo.png" class="img-fluid" alt="asdasda" />
          </span>
        </h4>
      </div>
      <ProductExperience {...mockProduct} />
    {/if}
  </div>
</div>
