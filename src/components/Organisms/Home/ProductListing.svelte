<script>
  import ProductCard from 'Molecules/Home/ProductCard';

  export let isCategory;
  export let products;
</script>

<style>
  /* your styles go here */
</style>

<div
  class="row pl-5 pr-5 pt-5 pb-5 m-0 justify-content-around align-items-stretch">
  {#if isCategory}
    <div class="col-12 text-center">
      <h2>Nueva temporada</h2>
    </div>
  {/if}
  {#each products as product, productIndex (productIndex)}
    <ProductCard {product} />
  {/each}
</div>
