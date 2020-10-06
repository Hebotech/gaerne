<script>
  export let name;
  export let description;
  export let website;
  export let isFav;
  export let dist;
  export let i;

  import { scale } from 'svelte/transition';
  $: delay = i * 200;
</script>

<style>
  .card {
    border-radius: 1px;
    border: 3px #f4d316 solid;
    text-align: center;
    padding: 5%;
    font-family: Cousine;
  }

  .card.isFav {
    border: none;
    background-color: #f4d316;
    text-align: center;
    padding: 5%;
    font-family: Cousine;
    clip-path: polygon(
      7% 0,
      91% 0,
      100% 17%,
      100% 79%,
      92% 100%,
      10% 100%,
      0 83%,
      0 15%
    );
  }
  .card h5 {
    font-weight: 700;
  }

  .card a {
    padding: 2% 15%;
    border: 1.5px solid #333;
    font-family: Open Sans;
    color: #333;

    text-transform: uppercase;
    transition: all 0.5s ease-in-out;
  }
  .card a:hover {
    color: white;
    transition: all 0.5s ease-out;
    background-color: #333;
  }
  .card.isFav a {
    background-color: #333;
    color: white;
    padding: 2% 15%;
    font-family: Open Sans;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
  }

  .card.isFav a:hover {
    font-weight: bolder;
    transition: all 0.5s ease-out;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div  class={`p-md-3 p-1 ${isFav ? 'col-lg-4 col-md-6 col-12' : 'col-lg-3 col-md-4 col-6'}`}>
  <div transition:scale={{delay}} class="card" class:isFav>
    <div class="card-content">
      <h5 class="card-title">
        {name}
      </h5>
      <p class="card-content">
        {description}
      </p>
      <a target="_blank" href={website}>
        Ir ahora
      </a>
    </div>
  </div>
</div>
