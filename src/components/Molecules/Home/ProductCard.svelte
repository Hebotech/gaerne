<script>
  import { Link } from 'svelte-routing';
  export let product;
</script>

<style>
  .card,
  img {
    border-radius: 10px;
  }
  .card {
    height: 100%;
  }
</style>

<div class="col-md-3 col-4 mt-md-3 mb-md-3 align-self text-center">
  <div class="card">
    <div class="card-img-top">
      <Link to={`/producto/${product.name}`}>
        <img src={product.images[0]} alt="" class="img-fluid" />
      </Link>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <Link to={`/producto/${product.name}`}>{product.name}</Link>
      </h5>
      <p class="card-text">{product.description}</p>
    </div>
  </div>
</div>
