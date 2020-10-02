<script>
  import ProductCard from 'Molecules/Home/ProductCard';

  export let products;
</script>

<style>
  .related-products-container {
    width: 100%;
    background-color: #333;
    color: #000;
    font-family: Cousine;
  }
  .product-listing {
    background-color: #000;
    flex-flow: nowrap row;
    overflow: auto;
  }
</style>

<h4>Productos relacionados</h4>
<div class="container-fluid m-0 p-0 related-products-container">
  <div class="row product-listing text-center">
    {#each products as product, productIndex (productIndex)}
      <ProductCard {product} />
    {/each}
  </div>
</div>
