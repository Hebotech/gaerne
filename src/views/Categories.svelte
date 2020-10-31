<script>
  import { productsStore } from '../store/products';
  import { navigate } from 'svelte-routing';

  import HeroHeader from 'Organisms/Category/HeroHeader';
  import ProductListing from 'Organisms/Home/ProductListing';
  import Loader from 'Atoms/Loader';

  export let name;

  $: products = $productsStore
    ? $productsStore.filter(
        (product) =>
          product.meta_data.find((meta) => meta.key === 'estilo_gaerne')
            .value === name
      )
    : null;
</script>

<style>
</style>

<div class="container-fluid text-center p-0">
  <HeroHeader {name} />
  {#if $productsStore}
    {#if products !== []}
      <ProductListing {products} />
    {:else}{navigate('/')}{/if}
  {:else}
    <div class="row m-0 align-items-center justify-content-center">
      <Loader />
    </div>
  {/if}
</div>
