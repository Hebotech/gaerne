<script>
  export let image;
  export let name;
  export let description;
</script>

<style>
  .hero-category {
    padding: 5% 2%;
    background-position: center center;
    background-size: cover;
    clip-rule: evenodd;
    clip-path: polygon(13% 0, 100% 0, 100% 72%, 88% 100%, 0 100%, 0 24%);
    color: white;
    transition: all 0.5s ease-in;
  }

  .hero-category:hover {
    transition: all 0.5s ease-out;
    background-position: 55% 52%;
  }
</style>

<div
  style={`background-image: radial-gradient(circle, rgba(0,0,0,0.6) 05%, rgba(0,0,0,0.0) 100%), url(${image});`}
  class="row m-0 hero-category text-center justify-content-center align-items-center">
  <div class="col-6">
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
</div>
