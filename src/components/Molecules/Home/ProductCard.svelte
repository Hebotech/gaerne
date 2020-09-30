<script>
  export let product;
</script>

<style>
  /* your styles go here */
</style>

<div class="col-3">
  <div class="card bg-dark text-white">
    <img
      class="card-img"
      src={product.images[0]}
      alt={`Bota gaerne ${product.name}`} />
    <div class="card-img-overlay">
      <h5 class="card-title">{product.title}</h5>
      <p class="card-text">{product.description}</p>
    </div>
  </div>
</div>
