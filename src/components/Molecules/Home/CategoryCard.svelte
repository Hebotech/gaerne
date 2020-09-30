<script>
  export let { name, image, description };
</script>

<style>
</style>

<div class="col">
  <div class="card">
    <div class="card-img-top"><img src={image} alt="" /></div>
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{description}</p>
    </div>
  </div>
</div>
